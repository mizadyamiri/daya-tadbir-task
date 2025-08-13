'use client';

import Button from '@mui/material/Button';
import MuiLink from '@/app/_components/MuiLink';
import { useAppSelector, useAppDispatch } from '../_store/hooks';
import { Product } from '@/app/_libs/data-services';
import { addItem } from '../_store/cartSlice';

interface Props {
  session: string | null;
  product: Product;
  width: '100%' | 'auto';
}

export default function CartButton({ session, product, width }: Props) {
  const { items } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const cartItem = items.find(i => i.id === product.id);

  const handleAddItem = () => {
    dispatch(
      addItem({
        ...product,
        quantity: 1,
      }),
    );
  };

  if (!session)
    return (
      <MuiLink href="/login">
        <Button variant="contained" sx={{ width: '100%' }}>
          ابتدا وارد شوید
        </Button>
      </MuiLink>
    );

  return (
    <>
      {cartItem ? (
        <Button disabled={true} variant="contained" sx={{ width }}>
          به سبد افزوده شد
        </Button>
      ) : (
        <Button onClick={handleAddItem} variant="contained" sx={{ width }}>
          افزودن به سبد خرید
        </Button>
      )}
    </>
  );
}
