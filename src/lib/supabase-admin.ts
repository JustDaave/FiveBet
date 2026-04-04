import { createClient } from "@supabase/supabase-js";

import { getSupabaseServerEnv } from "@/lib/server-env";

export function getSupabaseAdminClient() {
  const env = getSupabaseServerEnv();

  return createClient(env.supabaseUrl, env.supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
