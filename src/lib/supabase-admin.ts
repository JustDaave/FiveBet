import { createClient } from "@supabase/supabase-js";

import { getServerEnv } from "@/lib/server-env";

export function getSupabaseAdminClient() {
  const env = getServerEnv();

  return createClient(env.supabaseUrl, env.supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
