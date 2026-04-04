const supabaseRequiredKeys = [
  "SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
] as const;

const oxapayRequiredKeys = [
  "OXAPAY_MERCHANT_API_KEY",
  "OXAPAY_PAYOUT_API_KEY",
] as const;

type RequiredKey =
  | (typeof supabaseRequiredKeys)[number]
  | (typeof oxapayRequiredKeys)[number];

function getRequiredEnv(name: RequiredKey): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getServerEnv() {
  return {
    supabaseUrl: getRequiredEnv("SUPABASE_URL"),
    supabaseServiceRoleKey: getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY"),
    oxapayMerchantApiKey: getRequiredEnv("OXAPAY_MERCHANT_API_KEY"),
    oxapayPayoutApiKey: getRequiredEnv("OXAPAY_PAYOUT_API_KEY"),
    playerWalletsTable:
      process.env.SUPABASE_PLAYER_WALLETS_TABLE ?? "player_wallets",
    gameReportsTable:
      process.env.SUPABASE_GAME_REPORTS_TABLE ?? "game_reports",
    oxapayBaseUrl: process.env.OXAPAY_BASE_URL ?? "https://api.oxapay.com/v1",
    defaultCallbackUrl: process.env.OXAPAY_CALLBACK_URL,
  };
}

export function getSupabaseServerEnv() {
  return {
    supabaseUrl: getRequiredEnv("SUPABASE_URL"),
    supabaseServiceRoleKey: getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY"),
    playerWalletsTable:
      process.env.SUPABASE_PLAYER_WALLETS_TABLE ?? "player_wallets",
    gameReportsTable:
      process.env.SUPABASE_GAME_REPORTS_TABLE ?? "game_reports",
  };
}
