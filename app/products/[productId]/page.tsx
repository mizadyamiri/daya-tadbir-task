import { getProduct } from '@/app/_libs/data-services';
import { getSession } from '@/app/_libs/auth';
import commafy from '@/app/_libs/utiles';
import CartButton from '@/app/_components/CartButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const { title } = await getProduct(productId);

  return { title };
}

export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = await getProduct(productId);
  const session = await getSession();

  return (
    <Container
      maxWidth="lg"
      sx={{ padding: { lg: '0px  ' }, mt: 6, minHeight: 'calc(100vh - 500px)' }}
    >
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
    </Container>
  );
}
