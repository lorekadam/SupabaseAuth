'use server';

import { AuthResponse, AuthTokenResponse } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/supabase/server';
import { LoginFormType, SignUpFormType } from '@/types/schema/authentication';

export const signUpWithEmailAndPassword = async ({
  email,
  password,
  confirmPassword,
}: SignUpFormType) => {
  if (password === confirmPassword) {
    const result = await createSupabaseServerClient().auth.signUp({ email, password });
    console.log('SIGN_IN_UP', result);
    return JSON.parse(JSON.stringify(result)) as AuthResponse;
  }
  throw new Error("Passwords don't match");
};

export const signInWithEmailAndPassword = async ({ email, password }: LoginFormType) => {
  const result = await createSupabaseServerClient().auth.signInWithPassword({ email, password });
  console.log('SIGN_IN_RES', result);
  return JSON.parse(JSON.stringify(result)) as AuthTokenResponse;
};

export const signOut = async () => {
  await createSupabaseServerClient().auth.signOut();
  redirect('/');
};
