import { Product as IProduct } from '../_libs/data-services';
import Image from 'next/image';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import MuiLink from './MuiLink';
import CartButton from './CartButton';

interface Props {
  product: IProduct;
  session: string | null;
}

export default function Product({ product, session }: Props) {
  return (
    <Grid size={1} key={product.id}>
      <Card
        elevation={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          minHeight: 400,
        }}
      >
        <MuiLink href={`/products/${product.id}`}>
          <CardMedia sx={{ height: 150, width: 'auto', position: 'relative', my: 4 }}>
            <Image
              src={product.image}
              alt={product.title}
              fill
              style={{ objectFit: 'contain' }}
            />
          </CardMedia>
        </MuiLink>
        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h3" sx={{ fontSize: 16 }}>
            {product.title}
          </Typography>
          <Stack
            direction={'row-reverse'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ mt: 4 }}
          >
            <Typography variant="body1" sx={{ color: 'green', textAlign: 'left' }}>
              {product.price.toLocaleString('fa-IR')} تومان
            </Typography>
            {session ? (
              <CartButton product={product} session={session} width="auto" />
            ) : null}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
