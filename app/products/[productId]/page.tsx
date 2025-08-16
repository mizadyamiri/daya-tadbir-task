import { getSession } from '@/app/_libs/auth';
import Container from '@mui/material/Container';
import ProductDetail from '@/app/_components/ProductDetail';

export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const session = await getSession();

  return (
    <Container
      maxWidth="lg"
      sx={{ padding: { lg: '0px  ' }, mt: 6, minHeight: 'calc(100vh - 500px)' }}
    >
      <ProductDetail productId={productId} session={session} />
    </Container>
  );
}
