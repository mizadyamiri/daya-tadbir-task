import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

export default function ProductListSkeleton() {
  return (
    <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
      {Array.from({ length: 8 }).map((_, i) => (
        <Grid size={1} key={i}>
          <Skeleton variant="rounded" height={350} />
        </Grid>
      ))}
    </Grid>
  );
}
