import { createClient } from "@supabase/supabase-js";
const URL = "https://xlojmcuznlmgdxtoghsx.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhsb2ptY3V6bmxtZ2R4dG9naHN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4NTI3ODgsImV4cCI6MjAzNDQyODc4OH0.ivWWqFZURVzZNQQVtW2EZiMRXs6SkbN83eahSxJpBOA";
export const supabase = createClient(URL, API_KEY);

