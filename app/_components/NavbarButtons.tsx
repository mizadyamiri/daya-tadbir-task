'use client';

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MuiLink from '@/app/_components/MuiLink';
import { useAppSelector } from '../_store/hooks';

export default function NavbarButtons({ session }: { session: string | null }) {
  const { items } = useAppSelector(state => state.cart);
  const total = items.reduce((total, item) => (total += item.quantity), 0);
  const totalFa = total === 0 ? 0 : total.toLocaleString('fa-IR');

  return (
    <>
      {session ? (
        <MuiLink href="/cart">
          <IconButton size="large">
            <Badge badgeContent={totalFa} color="error">
              <LocalMallOutlinedIcon color="primary" />
            </Badge>
          </IconButton>
        </MuiLink>
      ) : (
        <MuiLink href="/login">
          <IconButton size="large">
            <AccountCircleOutlinedIcon color="primary" />
          </IconButton>
        </MuiLink>
      )}
    </>
  );
}
