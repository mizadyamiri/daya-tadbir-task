import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export default function Loading() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      gap={5}
      sx={{ my: 15, minHeight: 'calc(100vh - 500px)' }}
    >
      <CircularProgress />
    </Stack>
  );
}
