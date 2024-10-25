import { SupabaseClient } from "@supabase/supabase-js";

export async function login({ email, password }) {
  const { data, error } = await SupabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
}
