import { Metadata } from 'next';
import LoginForm from '../_components/LoginForm';

export const metadata: Metadata = {
  title: 'ورود',
};

export default function Page() {
  return <LoginForm />;
}
