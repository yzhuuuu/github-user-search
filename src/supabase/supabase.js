import { createClient } from "@supabase/supabase-js";
const supabaseURL = "https://gbxfvzikrazwantrfqpz.supabase.co";
const supabaseToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdieGZ2emlrcmF6d2FudHJmcXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwMTQyNTcsImV4cCI6MjAyMjU5MDI1N30.SJpIaQIkG80bClFffxAXoZJzrJdp9lM8gL_sEAyuD_o";

const supabase = createClient(supabaseURL, supabaseToken);
export default supabase;
