import { getProducts } from "../_libs/data-services";
import { getSession } from "@/app/_libs/auth";
import Grid from "@mui/material/Grid";
import Product from "./Product";

export default async function ProductList() {
  const products = await getProducts();
  const session = await getSession();

  return (
    <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
      {products.map(product => (
        <Product product={product} session={session} key={product.id} />
      ))}
    </Grid>
  );
}
