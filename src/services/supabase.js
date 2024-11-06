/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wiezaqxevgqussnagtlm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZXphcXhldmdxdXNzbmFndGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2MDMyNjcsImV4cCI6MjA0MjE3OTI2N30.lM2CNFN9aflpJ4FE8IBQPCK72lJhxzTrAsjoMRjB4XA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
