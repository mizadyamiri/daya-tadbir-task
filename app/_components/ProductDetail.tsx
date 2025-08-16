'use client';

import commafy from '@/app/_libs/utiles';
import CartButton from '@/app/_components/CartButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';
import useProduct from '../products/[productId]/useProduct';
import ProductSkeleton from './ProductSkeleton';

interface Props {
  session: string | null;
  productId: string;
}

export default function ProductDetail({ session, productId }: Props) {
  const { product, isLoading, error } = useProduct(productId);

  if (isLoading) return <ProductSkeleton />;

  if (error) throw new Error(error.message);

  if (!product) return null;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column-reverse' },
        justifyContent: 'space-between',
        p: 4,
        gap: 10,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 10,
          direction: 'ltr',
          width: { md: '60%', xs: '100%' },
          p: 0,
        }}
      >
        <Box>
          <Typography variant="h1" sx={{ fontSize: 24 }}>
            {product.title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2 }}>
            {product.description}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 24, color: 'green', textAlign: 'left', mb: 5 }}>
            {commafy(product.price)} تومان
          </Typography>

          <CartButton session={session} product={product} width="100%" />
        </Box>
      </CardContent>

      <CardMedia
        sx={{
          width: { md: '40%', xs: '100%' },
          height: { md: 'auto', sm: 400, xs: 200 },
          position: 'relative',
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: 'contain' }}
        />
      </CardMedia>
    </Card>
  );
}
