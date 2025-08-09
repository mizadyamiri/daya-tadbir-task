import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import { CartItem as CartItemProps } from '@/app/_store/cart-store';
import { useCartStore } from '@/app/_store/cart-store-provider';

export default function CartItem({ cartItem }: { cartItem: CartItemProps }) {
  const { addItem, removeItem } = useCartStore(state => state);

  const handleAddItem = () => {
    addItem({ ...cartItem, quantity: 1 });
  };

  return (
    <Grid
      container
      gap={4}
      direction={{ xs: 'column', md: 'row' }}
      sx={{
        direction: 'ltr',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 7,
      }}
    >
      <Grid size={'auto'}>
        <Image
          src={cartItem.image}
          alt={cartItem.title}
          width={100}
          height={100}
          style={{ objectFit: 'contain' }}
        />
      </Grid>
      <Grid size={'grow'}>
        <Typography variant="h2" fontSize={18}>
          {cartItem.title}
        </Typography>
      </Grid>

      <Grid size={'auto'} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Typography variant="body1" fontSize={18} color="green">
          {cartItem.price.toLocaleString('fa-IR')}
        </Typography>

        <IconButton onClick={() => removeItem(cartItem.id)} size="small">
          <RemoveIcon fontSize="small" />
        </IconButton>
        <Typography variant="body1" fontSize={18}>
          {cartItem.quantity.toLocaleString('fa-IR')}
        </Typography>
        <IconButton onClick={handleAddItem} size="small">
          <AddIcon fontSize="small" />
        </IconButton>

        <Typography variant="body1" fontSize={18}>
          {(cartItem.quantity * cartItem.price).toLocaleString('fa-IR')}
        </Typography>
      </Grid>
    </Grid>
  );
}
