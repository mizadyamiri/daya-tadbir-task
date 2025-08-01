'use server';

import { signIn, signOut } from '@/app/_libs/auth';

export async function signInAction(formData: FormData) {
  const user = {
    username: formData.get('email')!,
    password: formData.get('password')!,
  };

  await signIn(user);
}

export async function signOutAction() {
  await signOut();
}
