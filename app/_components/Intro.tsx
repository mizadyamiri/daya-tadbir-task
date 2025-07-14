import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import monitor from "@/public/images/samsung-monitor-transparent.png";
import Image from "next/image";

export default function Header() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        width: 1,
        display: "flex",
        alignItems: "center",
        py: 6,
      }}
    >
      <Container maxWidth='lg' sx={{ padding: { lg: "0px !important" } }}>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          gap={4}
          alignItems='center'
          justifyContent={"space-between"}
        >
          <Stack
            direction='column'
            alignItems={{ md: "start", xs: "center" }}
            spacing={2.5}
            sx={{ textAlign: { md: "unset", xs: "center" } }}
          >
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: { lg: "80px", xs: "70px" },
                color: "secondary.main",
                textTransform: "uppercase",
              }}
            >
              الان بخر
              <br /> بعدا پرداخت کن
            </Typography>
            <Link href='products/14'>
              <Button
                variant='contained'
                color='secondary'
                sx={{
                  width: "225px",
                  height: "55px",
                  letterSpacing: "1px",
                  fontSize: 13.5,
                }}
              >
                همین حالا سفارش دهید
              </Button>
            </Link>
          </Stack>
          <Box sx={{ width: { xs: 1, md: 1 / 2 }, display: "block" }}>
            <Image
              src={monitor}
              placeholder='empty'
              alt='samsung oled monitor'
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
