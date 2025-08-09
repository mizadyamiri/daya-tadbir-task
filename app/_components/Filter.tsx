'use client';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

const filterList = [
  { lable: 'همه', value: 'all' },
  { lable: 'جواهرات', value: 'jewelery' },
  { lable: 'الکترونیکی', value: 'electronics' },
  { lable: 'لباس مردانه', value: "men's clothing" },
  { lable: 'لباس زنانه', value: "women's clothing" },
];

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [filter, setFilter] = useState(searchParams.get('filter') ?? 'all');

  const handleChange = (filter: string) => {
    const params = new URLSearchParams(searchParams);

    params.set('filter', filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    setFilter(filter);
  };

  return (
    <ToggleButtonGroup color="primary" value={filter} exclusive aria-label="category">
      {filterList.map(item => (
        <ToggleButton
          onClick={() => handleChange(item.value)}
          key={item.value}
          value={item.value}
        >
          {item.lable}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
