import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://wvdcibegdnlflqewkhrf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_b2zVib7kei9sx5X7U0kBOQ_7mswPRVS";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
