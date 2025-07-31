"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts, Product as IProduct } from "../_libs/data-services";
import Grid from "@mui/material/Grid";
import Product from "./Product";

interface Props {
  products: IProduct[];
  session: string | null;
}

export default function ProductList({ products, session }: Props) {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialData: products,
  });

  return (
    <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
      {data.map(product => (
        <Product product={product} session={session} key={product.id} />
      ))}
    </Grid>
  );
}
