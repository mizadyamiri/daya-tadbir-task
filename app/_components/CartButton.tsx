"use client";

import Button from "@mui/material/Button";
import MuiLink from "@/app/_components/MuiLink";
import { useCartStore } from "@/app/_store/cart-store-provider";
import { Product } from "@/app/_libs/data-services";

interface Props {
  session: string | null;
  product: Product;
}

export default function CartButton({ session, product }: Props) {
  const { items, addItem } = useCartStore(state => state);
  const cartItem = items.find(i => i.id === product.id);

  const handleAddItem = () => {
    addItem({
      ...product,
      quantity: 1,
    });
  };

  if (!session)
    return (
      <MuiLink href='/login'>
        <Button variant='contained' sx={{ width: "100%", mt: 5 }}>
          ابتدا وارد شوید
        </Button>
      </MuiLink>
    );

  return (
    <>
      {cartItem ? (
        <Button disabled={true} variant='contained' sx={{ width: "100%", mt: 5 }}>
          به سبد افزوده شد
        </Button>
      ) : (
        <Button onClick={handleAddItem} variant='contained' sx={{ width: "100%", mt: 5 }}>
          افزودن به سبد خرید
        </Button>
      )}
    </>
  );
}
