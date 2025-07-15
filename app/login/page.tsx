import { Paper, Container, Typography, Box, TextField, Button } from "@mui/material";

function page() {
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
            ورود
          </Typography>

          <Box width={1}>
            <TextField
              id='username'
              label='ایمیل'
              variant='outlined'
              type='email'
              required
              fullWidth
              margin='normal'
            />
            <TextField
              id='password'
              label='رمز عبور'
              variant='outlined'
              type='password'
              required
              fullWidth
              margin='normal'
            />
          </Box>

          <Button
            type='submit'
            variant='contained'
            fullWidth
            sx={{ fontSize: 18, mt: 5 }}
          >
            ورود
          </Button>
        </Paper>
      </form>
    </Container>
  );
}

export default page;
