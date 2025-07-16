import { Stack, Typography, Button } from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <Stack alignItems='center' gap={5} sx={{ my: 15, minHeight: "calc(100vh - 570px)" }}>
      <Typography sx={{ fontSize: { xs: 50, md: 60 }, textAlign: "center" }} variant='h1'>
        صفحه‌ای که دنبال آن بودید پیدا نشد!
      </Typography>

      <Button sx={{ letterSpacing: 1, fontSize: 20 }} component={Link} href='/'>
        صفحه اصلی
      </Button>
    </Stack>
  );
}
