import { NextResponse } from "next/server";

import { createPayout } from "@/lib/oxapay";
import { getServerEnv } from "@/lib/server-env";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";

export const runtime = "nodejs";

type InternalPayoutBody = {
  playerId?: string;
  amount?: number;
  currency?: string;
  network?: string;
  callbackUrl?: string;
  memo?: string;
  description?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InternalPayoutBody;

    if (!body.playerId || typeof body.playerId !== "string") {
      return NextResponse.json(
        { error: "playerId is required" },
        { status: 400 },
      );
    }

    if (typeof body.amount !== "number" || body.amount <= 0) {
      return NextResponse.json(
        { error: "amount must be a number greater than 0" },
        { status: 400 },
      );
    }

    const env = getServerEnv();
    const supabase = getSupabaseAdminClient();

    const { data: wallet, error } = await supabase
      .from(env.playerWalletsTable)
      .select("player_id, oxa_address, oxa_network")
      .eq("player_id", body.playerId)
      .maybeSingle();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!wallet || !wallet.oxa_address) {
      return NextResponse.json(
        { error: "Player wallet not found" },
        { status: 404 },
      );
    }

    const payoutResponse = await createPayout({
      address: wallet.oxa_address,
      amount: body.amount,
      currency: body.currency ?? "BTC",
      network: body.network ?? wallet.oxa_network ?? "BTC",
      callback_url: body.callbackUrl ?? env.defaultCallbackUrl,
      memo: body.memo,
      description: body.description,
    });

    return NextResponse.json({
      ok: true,
      playerId: body.playerId,
      address: wallet.oxa_address,
      payout: payoutResponse,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
