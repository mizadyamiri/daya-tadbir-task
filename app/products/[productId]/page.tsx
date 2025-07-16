import MuiLink from "@/app/_components/MuiLink";
import { getSession } from "@/app/_libs/auth";
import { getProduct } from "@/app/_libs/data-services";
import commafy from "@/app/_libs/utiles";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import Image from "next/image";

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
    <Container maxWidth='lg' sx={{ padding: { lg: "0px !important" }, mt: 6 }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column-reverse" },
          justifyContent: "space-between",
          // minHeight: 500,
          p: 4,
          gap: 10,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 10,
            direction: "ltr",
            width: { md: "60%", xs: "100%" },
            p: 0,
          }}
        >
          <Box>
            <Typography variant='h1' sx={{ fontSize: 24 }}>
              {product.title}
            </Typography>
            <Typography variant='body1' sx={{ color: "text.secondary", mt: 2 }}>
              {product.description}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 24, color: "green", textAlign: "left" }}>
              {commafy(product.price)} تومان
            </Typography>
            {session ? (
              <Button variant='contained' sx={{ width: "100%", mt: 5 }}>
                افزودن به سبد
              </Button>
            ) : (
              <MuiLink href='/login'>
                <Button variant='contained' sx={{ width: "100%", mt: 5 }}>
                  ابتدا وارد شوید
                </Button>
              </MuiLink>
            )}
          </Box>
        </CardContent>

        <CardMedia
          sx={{
            width: { md: "40%", xs: "100%" },
            height: { md: "auto", sm: 400, xs: 200 },
            position: "relative",
          }}
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
          />
        </CardMedia>
      </Card>
    </Container>
  );
}
