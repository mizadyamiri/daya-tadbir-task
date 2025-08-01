import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface User {
  username: FormDataEntryValue;
  password: FormDataEntryValue;
}

export async function signIn(user: User) {
  console.log(user);

  const expires = new Date(Date.now() + 3600 * 1000);
  const session = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

  await new Promise(res => setTimeout(res, 2000));

  (await cookies()).set('session', session, { expires, httpOnly: true });

  redirect('/');
}

export async function signOut() {
  await new Promise(res => setTimeout(res, 2000));

  (await cookies()).set('session', '', { expires: new Date(0) });
}

export async function getSession() {
  const session = (await cookies()).get('session')?.value;

  if (!session) return null;

  return session;
}

// export async function updateSession() {}
