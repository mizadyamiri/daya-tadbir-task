'use client';

import { useCartStore } from '@/app/_store/cart-store-provider';
import CartItem from '@/app/_components/CartItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MuiLink from './MuiLink';

export default function CartList() {
  const { items } = useCartStore(state => state);
  const totalPrice = items.reduce(
    (total, item) => (total += item.price * item.quantity),
    0,
  );

  if (items?.length === 0)
    return (
      <Stack alignItems="center" gap={5} sx={{ my: 20 }}>
        <Typography
          sx={{ fontSize: { xs: 50, md: 60 }, textAlign: 'center' }}
          variant="h1"
        >
          سبد خالی است!
        </Typography>
      </Stack>
    );

  return (
    <Paper elevation={8} sx={{ bgcolor: '#fff', p: 3 }}>
      {items.map(item => (
        <CartItem cartItem={item} key={item.id} />
      ))}

      <MuiLink href="/checkout">
        <Button variant="contained" size="large" sx={{ width: { xs: '100%', md: 220 } }}>
          ثبت نهایی ({totalPrice.toLocaleString('fa-IR')} تومان)
        </Button>
      </MuiLink>
    </Paper>
  );
}
