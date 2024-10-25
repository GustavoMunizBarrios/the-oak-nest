//import { SupabaseClient } from "@supabase/supabase-js";
//import { SupabaseClient } from "./supabase";
import supabase from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
}
