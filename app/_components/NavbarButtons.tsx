'use client';

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MuiLink from '@/app/_components/MuiLink';
import { useCartStore } from '../_store/cart-store-provider';

export default function NavbarButtons({ session }: { session: string | null }) {
  const { items } = useCartStore(state => state);
  const total = items.reduce((total, item) => (total += item.quantity), 0);

  return (
    <>
      {session ? (
        <MuiLink href="/cart">
          <IconButton size="large">
            <Badge badgeContent={total} color="error">
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
