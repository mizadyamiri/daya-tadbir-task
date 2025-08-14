import { default as MuiPagination } from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

function convertNumberToFarsi(num: number) {
  const farsiNumbers = '۰۱۲۳۴۵۶۷۸۹';
  let result = '';
  const str = num.toString();
  for (const c of str) {
    result += farsiNumbers.charAt(parseInt(c)); // Convert char to int for index
  }
  return result;
}

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
      renderItem={item => {
        if (item.type === 'page') {
          return <PaginationItem {...item} page={convertNumberToFarsi(item.page!)} />;
        }
        return <PaginationItem {...item} />;
      }}
      sx={{ display: 'flex', justifyContent: 'center' }}
      color="primary"
      count={count}
      onChange={(e, page) => handleChange(page)}
    />
  ) : null;
}
