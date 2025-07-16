import { Paper, Container, Typography, Box, TextField } from "@mui/material";
import SubmitButton from "@/app/_components/SubmitButton";
import { Metadata } from "next";
import { signInAction } from "@/app/_libs/actions";

export const metadata: Metadata = {
  title: "ورود",
};

export default function Page() {
  return (
    <Container maxWidth='xs' sx={{ padding: { lg: "0px !important" }, my: 6 }}>
      <form action={signInAction}>
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
            ورود
          </Typography>

          <Box width={1}>
            <TextField
              id='email'
              name='email'
              label='ایمیل'
              variant='outlined'
              type='email'
              required
              fullWidth
              margin='normal'
            />
            <TextField
              id='password'
              name='password'
              label='رمز عبور'
              variant='outlined'
              type='password'
              required
              fullWidth
              margin='normal'
            />
          </Box>

          <SubmitButton label='ورود' />
        </Paper>
      </form>
    </Container>
  );
}
