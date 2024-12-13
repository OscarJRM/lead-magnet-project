import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabeseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabeseKey);