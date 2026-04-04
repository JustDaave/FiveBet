import { NextResponse } from "next/server";

import { getSupabaseServerEnv } from "@/lib/server-env";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";

export const runtime = "nodejs";

type GameReportInput = {
  reportId?: string;
  game?: string;
  playerId?: string;
  serverId?: string;
  sessionId?: string;
  roundId?: string;
  betAmount?: number;
  payoutAmount?: number;
  currency?: string;
  result?: string;
  occurredAt?: string;
  metadata?: Record<string, unknown>;
};

type GameReportRequestBody =
  | GameReportInput
  | {
      reports?: GameReportInput[];
    };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseOccurredAt(value: string | undefined): string {
  if (!value) {
    return new Date().toISOString();
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error("occurredAt must be a valid ISO-8601 datetime string");
  }

  return parsed.toISOString();
}

function normalizeReports(body: GameReportRequestBody): GameReportInput[] {
  if (Array.isArray(body)) {
    return body;
  }

  if (isRecord(body) && Array.isArray(body.reports)) {
    return body.reports;
  }

  return [body as GameReportInput];
}

function validateReport(report: GameReportInput, index: number) {
  if (!report.reportId || typeof report.reportId !== "string") {
    throw new Error(`reports[${index}].reportId is required`);
  }

  if (!report.game || typeof report.game !== "string") {
    throw new Error(`reports[${index}].game is required`);
  }

  if (typeof report.betAmount !== "number" || Number.isNaN(report.betAmount)) {
    throw new Error(`reports[${index}].betAmount must be a number`);
  }

  if (
    typeof report.payoutAmount !== "number" ||
    Number.isNaN(report.payoutAmount)
  ) {
    throw new Error(`reports[${index}].payoutAmount must be a number`);
  }

  if (!report.currency || typeof report.currency !== "string") {
    throw new Error(`reports[${index}].currency is required`);
  }

  if (report.metadata !== undefined && !isRecord(report.metadata)) {
    throw new Error(`reports[${index}].metadata must be an object when provided`);
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as GameReportRequestBody;
    const reports = normalizeReports(body);

    if (reports.length === 0) {
      return NextResponse.json(
        { error: "At least one report is required" },
        { status: 400 },
      );
    }

    reports.forEach(validateReport);

    const env = getSupabaseServerEnv();
    const supabase = getSupabaseAdminClient();

    const rows = reports.map((report) => {
      const occurredAt = parseOccurredAt(report.occurredAt);

      return {
        report_id: report.reportId,
        game_key: report.game,
        player_id: report.playerId ?? null,
        server_id: report.serverId ?? null,
        session_id: report.sessionId ?? null,
        round_id: report.roundId ?? null,
        bet_amount: report.betAmount,
        payout_amount: report.payoutAmount,
        net_amount: report.payoutAmount - report.betAmount,
        currency: report.currency,
        result: report.result ?? null,
        metadata: report.metadata ?? null,
        raw_payload: report,
        occurred_at: occurredAt,
      };
    });

    const { data, error } = await supabase
      .from(env.gameReportsTable)
      .upsert(rows, { onConflict: "report_id" })
      .select(
        "report_id, game_key, player_id, server_id, session_id, round_id, bet_amount, payout_amount, net_amount, currency, result, occurred_at, created_at, updated_at",
      );

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      {
        ok: true,
        inserted: data?.length ?? rows.length,
        reports: data ?? [],
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