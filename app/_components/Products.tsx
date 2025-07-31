import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProductList from "@/app/_components/ProductList";
import { Suspense } from "react";
import ProductListSkeleton from "@/app/_components/ProductListSkeleton";

export default function Products() {
  return (
    <Container maxWidth='lg' sx={{ padding: { lg: "0px !important" }, my: 6 }}>
      <Stack direction='column' spacing={3} sx={{ width: 1 }}>
        <Stack
          direction='row'
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ width: 1 }}
        >
          <Typography sx={{ fontSize: 24, fontWeight: 400 }}>کالا ها</Typography>
        </Stack>

        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList />
        </Suspense>
      </Stack>
    </Container>
  );
}
