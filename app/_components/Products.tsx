import { getSession } from '@/app/_libs/auth';
import { Suspense } from 'react';
import ProductList from '@/app/_components/ProductList';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ProductListSkeleton from '@/app/_components/ProductListSkeleton';
import Filter from './Filter';

export default async function Products() {
  const session = await getSession();

  return (
    <Container maxWidth="lg" sx={{ padding: { lg: '0px  ' }, my: 6 }}>
      <Stack direction="column" spacing={3} sx={{ width: 1 }}>
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          alignItems={'center'}
          justifyContent={'space-between'}
          sx={{ width: 1 }}
        >
          <Typography sx={{ fontSize: 24, fontWeight: 400 }}>کالا ها</Typography>

          <Filter />
        </Stack>

        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList session={session} />
        </Suspense>
      </Stack>
    </Container>
  );
}
