import { NextResponse } from "next/server";

import { getPaymentInformation } from "@/lib/oxapay";
import { getServerEnv } from "@/lib/server-env";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ playerId: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  try {
    const { playerId } = await context.params;

    if (!playerId) {
      return NextResponse.json({ error: "playerId is required" }, { status: 400 });
    }

    const env = getServerEnv();
    const supabase = getSupabaseAdminClient();

    const { data: wallet, error } = await supabase
      .from(env.playerWalletsTable)
      .select("player_id, oxa_track_id, oxa_address")
      .eq("player_id", playerId)
      .maybeSingle();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!wallet) {
      return NextResponse.json(
        { error: "Player wallet not found" },
        { status: 404 },
      );
    }

    const trackId = wallet.oxa_track_id as string | null;
    if (!trackId) {
      return NextResponse.json(
        { error: "No track_id stored for this player" },
        { status: 400 },
      );
    }

    const paymentInfo = await getPaymentInformation(trackId);

    return NextResponse.json({
      ok: true,
      playerId,
      trackId,
      address: wallet.oxa_address,
      paymentInfo,
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
