import { Metadata } from 'next';
import Container from '@mui/material/Container';
import CartList from '../_components/CartList';

export const metadata: Metadata = {
  title: 'سبد خرید',
};

export default function Page() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 2,
        my: 6,
        minHeight: 'calc(100vh - 480px)',
      }}
    >
      <CartList />
    </Container>
  );
}
