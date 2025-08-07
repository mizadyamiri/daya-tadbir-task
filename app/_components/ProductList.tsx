'use client';

import { Product as IProduct } from '../_libs/data-services';
import Grid from '@mui/material/Grid';
import Product from './Product';
import useProducts from '../products/useProducts';

interface Props {
  preFetchedProducts: IProduct[];
  session: string | null;
}

export default function ProductList({ preFetchedProducts, session }: Props) {
  const { products } = useProducts(preFetchedProducts);

  return (
    <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
      {products.map(product => (
        <Product product={product} session={session} key={product.id} />
      ))}
    </Grid>
  );
}
