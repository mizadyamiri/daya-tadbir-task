import Button from "@mui/material/Button";
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
          <Stack direction='column' spacing={0} sx={{ cursor: "pointer" }}>
            <Button sx={{ fontSize: 18, fontWeight: 400, textTransform: "uppercase" }}>
              مشاهده همه
            </Button>
            {/* <Box sx={{ width: 1, height: 1, backgroundColor: "#E1E1E1" }} /> */}
          </Stack>
        </Stack>

        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList />
        </Suspense>
      </Stack>
    </Container>
  );
}
