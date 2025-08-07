import Container from '@mui/material/Container';
import MuiLink from './MuiLink';
import Image from 'next/image';
import dayatadbirlogo from '@/public/images/daya-tadbir-logo.png';
import { getSession } from '@/app/_libs/auth';
import NavbarButtons from './NavbarButtons';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default async function Navbar() {
  const session = await getSession();

  return (
    <AppBar position="fixed" color="secondary">
      <Container maxWidth="lg" sx={{ padding: { lg: '0px  ' } }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <MuiLink href="/">
            <Image
              src={dayatadbirlogo}
              width={120}
              style={{ height: 'auto' }}
              alt="daya tadbir logo"
            />
          </MuiLink>

          <NavbarButtons session={session} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
