import { default as MuiPagination } from '@mui/material/Pagination';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

type Prop = { count: number; filteredProductsLength: number; maxNumOfItems: number };

export default function Pagination({
  count,
  filteredProductsLength,
  maxNumOfItems,
}: Prop) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (page: number) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', page.toString());
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return filteredProductsLength > maxNumOfItems ? (
    <MuiPagination
      sx={{ display: 'flex', justifyContent: 'center' }}
      color="primary"
      count={count}
      onChange={(e, page) => handleChange(page)}
    />
  ) : null;
}
