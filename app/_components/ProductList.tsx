import { getProducts } from "../_libs/data-services";
import Image from "next/image";
import { CardMedia, Grid, Typography, Card, CardContent } from "@mui/material";
import MuiLink from "./MuiLink";
import commafy from "@/app/_libs/utiles";

export default async function ProductList() {
  const products = await getProducts();
  console.log(products);

  return (
    <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
      {products.map(item => (
        <Grid size={1} key={item.id}>
          <MuiLink href={`/products/${item.id}`}>
            <Card elevation={8}>
              <CardMedia sx={{ height: 200, position: "relative", m: 5 }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </CardMedia>
              <CardContent
                sx={{
                  height: 150,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant='h3' sx={{ fontSize: 16 }}>
                  {item.title}
                </Typography>
                <Typography variant='body1' sx={{ color: "green", textAlign: "left" }}>
                  {commafy(item.price)} تومان
                </Typography>
              </CardContent>
            </Card>
          </MuiLink>
        </Grid>
      ))}
    </Grid>
  );
}
