'use client';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SubmitButton from '@/app/_components/SubmitButton';
import { signInAction } from '@/app/_libs/actions';
import { CacheProvider } from '@emotion/react';
import { rtlCache } from '../_libs/utiles';

export default function LoginForm() {
  return (
    <CacheProvider value={rtlCache}>
      <Container maxWidth="xs" sx={{ padding: { lg: '0px  ' }, my: 6 }}>
        <form action={signInAction}>
          <Paper
            elevation={8}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 4,
            }}
          >
            <Typography variant="h1" fontSize={{ md: 50, xs: 30 }} gutterBottom>
              ورود
            </Typography>

            <Box width={1}>
              <TextField
                id="email"
                name="email"
                label="ایمیل"
                variant="outlined"
                type="email"
                required
                fullWidth
                margin="normal"
              />
              <TextField
                id="password"
                name="password"
                label="رمز عبور"
                variant="outlined"
                type="password"
                required
                fullWidth
                margin="normal"
              />
            </Box>

            <SubmitButton label="ورود" />
          </Paper>
        </form>
      </Container>
    </CacheProvider>
  );
}
