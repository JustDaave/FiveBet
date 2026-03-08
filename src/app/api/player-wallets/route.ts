import { NextResponse } from "next/server";

import { createStaticAddress } from "@/lib/oxapay";
import { getServerEnv } from "@/lib/server-env";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";

export const runtime = "nodejs";

type CreatePlayerWalletBody = {
  playerId?: string;
  network?: string;
  toCurrency?: string;
  autoWithdrawal?: boolean;
  callbackUrl?: string;
  email?: string;
  orderId?: string;
  description?: string;
};

function pickString(
  data: Record<string, unknown>,
  keys: string[],
): string | null {
  for (const key of keys) {
    const value = data[key];
    if (typeof value === "string" && value.length > 0) {
      return value;
    }

    if (typeof value === "number" && Number.isFinite(value)) {
      return String(value);
    }
  }
  return null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CreatePlayerWalletBody;

    if (!body.playerId || typeof body.playerId !== "string") {
      return NextResponse.json(
        { error: "playerId is required" },
        { status: 400 },
      );
    }

    const env = getServerEnv();
    const supabase = getSupabaseAdminClient();

    const staticAddress = await createStaticAddress({
      network: body.network ?? "BTC",
      to_currency: body.toCurrency ?? "USDT",
      auto_withdrawal: body.autoWithdrawal ?? false,
      callback_url: body.callbackUrl ?? env.defaultCallbackUrl,
      email: body.email,
      order_id: body.orderId,
      description: body.description,
    });

    const nestedData =
      typeof staticAddress.data === "object" && staticAddress.data !== null
        ? (staticAddress.data as Record<string, unknown>)
        : null;

    const trackId =
      pickString(staticAddress, ["track_id", "trackId"]) ??
      (nestedData ? pickString(nestedData, ["track_id", "trackId"]) : null);

    const address =
      pickString(staticAddress, ["address", "payment_address"]) ??
      (nestedData
        ? pickString(nestedData, ["address", "payment_address"])
        : null);

    if (!trackId || !address) {
      return NextResponse.json(
        {
          error:
            "OxaPay static address response is missing track_id or address.",
          raw: staticAddress,
        },
        { status: 502 },
      );
    }

    const { data: wallet, error } = await supabase
      .from(env.playerWalletsTable)
      .upsert(
        {
          player_id: body.playerId,
          oxa_network: body.network ?? "BTC",
          oxa_to_currency: body.toCurrency ?? "USDT",
          oxa_track_id: trackId,
          oxa_address: address,
          oxa_raw: staticAddress,
        },
        { onConflict: "player_id" },
      )
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      {
        ok: true,
        wallet,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
