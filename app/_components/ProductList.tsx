import { getProducts } from "../_libs/data-services";
import Image from "next/image";
import {
  CardMedia,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import MuiLink from "./MuiLink";
import commafy from "@/app/_libs/utiles";
import { getSession } from "@/app/_libs/auth";

export default async function ProductList() {
  const products = await getProducts();
  const session = await getSession();

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
                  minHeight: 150,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant='h3' sx={{ fontSize: 16 }}>
                  {item.title}
                </Typography>
                <Stack
                  direction={"row-reverse"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant='body1' sx={{ color: "green", textAlign: "left" }}>
                    {commafy(item.price)} تومان
                  </Typography>
                  {session ? (
                    <Button variant='contained'>اضافه به سبد خرید</Button>
                  ) : null}
                </Stack>
              </CardContent>
            </Card>
          </MuiLink>
        </Grid>
      ))}
    </Grid>
  );
}
