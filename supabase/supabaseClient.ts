import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://odijddpbmevzcdihygqo.supabase.co";
const supabeseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabeseKey);