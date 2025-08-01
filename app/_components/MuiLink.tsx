import Link from 'next/link';
import { Link as Mlink } from '@mui/material';

function MuiLink({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  return (
    <Mlink sx={{ textDecoration: 'none' }} component={Link} href={href}>
      {children}
    </Mlink>
  );
}

export default MuiLink;
