import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SelectProvinceAndCity from "@/app/_components/SelectProvinceAndCity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تکمیل خرید",
};

export default function Page() {
  return (
    <Container maxWidth='xs' sx={{ padding: { lg: "0px !important" }, my: 6 }}>
      <form>
        <Paper
          elevation={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 4,
          }}
        >
          <Typography variant='h1' fontSize={{ md: 50, xs: 30 }} gutterBottom>
            تکمیل خرید
          </Typography>

          <Box width={1}>
            <TextField
              id='firstname'
              label='نام'
              variant='outlined'
              type='text'
              required
              fullWidth
              margin='dense'
            />
            <TextField
              id='lastname'
              label='نام خانوادگی'
              variant='outlined'
              type='text'
              required
              fullWidth
              margin='dense'
            />
            <TextField
              id='mobile'
              label='موبایل'
              variant='outlined'
              type='number'
              required
              fullWidth
              margin='dense'
            />
            <TextField
              id='postalnum'
              label='کد پستی'
              variant='outlined'
              type='number'
              required
              fullWidth
              margin='dense'
            />

            <SelectProvinceAndCity />

            <TextField
              id='address'
              label='آدرس'
              variant='outlined'
              type='text'
              multiline
              maxRows={3}
              required
              fullWidth
              margin='dense'
            />
          </Box>

          <Button
            type='submit'
            variant='contained'
            fullWidth
            sx={{ fontSize: 18, mt: 5 }}
          >
            پرداخت
          </Button>
        </Paper>
      </form>
    </Container>
  );
}
