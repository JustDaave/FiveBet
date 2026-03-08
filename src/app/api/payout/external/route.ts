import { NextResponse } from "next/server";

import { createPayout } from "@/lib/oxapay";
import { getServerEnv } from "@/lib/server-env";

export const runtime = "nodejs";

type ExternalPayoutBody = {
  address?: string;
  amount?: number;
  currency?: string;
  network?: string;
  callbackUrl?: string;
  memo?: string;
  description?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ExternalPayoutBody;

    if (!body.address || typeof body.address !== "string") {
      return NextResponse.json({ error: "address is required" }, { status: 400 });
    }

    if (typeof body.amount !== "number" || body.amount <= 0) {
      return NextResponse.json(
        { error: "amount must be a number greater than 0" },
        { status: 400 },
      );
    }

    const env = getServerEnv();
    const payoutResponse = await createPayout({
      address: body.address,
      amount: body.amount,
      currency: body.currency ?? "BTC",
      network: body.network ?? "BTC",
      callback_url: body.callbackUrl ?? env.defaultCallbackUrl,
      memo: body.memo,
      description: body.description,
    });

    return NextResponse.json({
      ok: true,
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
