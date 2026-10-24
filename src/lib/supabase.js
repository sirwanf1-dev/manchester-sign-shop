import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lvqoyvmwxjwqmomjngdd.supabase.co';
const supabasePublishableKey = 'sb_publishable_F6h3nzs05XkWwFYBZKRSRw_0DDtWufo';

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});
