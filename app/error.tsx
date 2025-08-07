'use client';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'خطا',
};

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Stack alignItems="center" gap={5} sx={{ my: 15, minHeight: 'calc(100vh - 500px)' }}>
      <Typography sx={{ fontSize: { xs: 50, md: 60 }, textAlign: 'center' }} variant="h1">
        مشکلی پیش اومد🤷🏻‍♂️
      </Typography>
      <Typography variant="body1" sx={{ fontSize: 20 }}>
        {error.message}
      </Typography>

      <Button
        sx={{ letterSpacing: 1, fontSize: 20 }}
        variant="contained"
        onClick={() => reset()}
      >
        🔄️ تلاش مجدد
      </Button>
    </Stack>
  );
}

export default Error;
