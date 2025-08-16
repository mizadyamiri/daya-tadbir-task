'use client';

import Grid from '@mui/material/Grid';
import Product from './Product';
import useProducts from '../products/useProducts';
import { useSearchParams } from 'next/navigation';
import Pagination from './Pagination';
import ProductListSkeleton from './ProductListSkeleton';

interface Props {
  // preFetchedProducts: IProduct[];
  session: string | null;
}

export default function ProductList({ session }: Props) {
  const { products, isLoading, error } = useProducts();
  const searchParams = useSearchParams();

  if (isLoading) return <ProductListSkeleton />;

  if (error) return null;

  const filter = searchParams.get('filter') ?? 'all';
  const filteredProducts =
    filter === 'all'
      ? products!
      : products!.filter(product => product.category === filter)!;

  const maxNumOfItems = 8;
  const pageNum = searchParams.get('page') ?? 1;
  const pagesCount = Math.ceil(filteredProducts.length / maxNumOfItems);
  const paginatedProducts =
    pagesCount <= 1
      ? filteredProducts
      : filteredProducts.slice(maxNumOfItems * (+pageNum - 1), maxNumOfItems * +pageNum);

  return (
    <>
      <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
        {paginatedProducts.map(product => (
          <Product product={product} session={session} key={product.id} />
        ))}
      </Grid>

      <Pagination
        count={pagesCount}
        maxNumOfItems={maxNumOfItems}
        filteredProductsLength={filteredProducts.length}
      />
    </>
  );
}
