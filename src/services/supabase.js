import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://elhvlncqpjhhmdpijuub.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsaHZsbmNxcGpoaG1kcGlqdXViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMjE0NzEsImV4cCI6MjAwOTU5NzQ3MX0.M3xvsxf24hHLvZxW0M8ESVb_5Dr6HJD4Iv1Nsu4Uui4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
