import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import MuiLink from "./MuiLink";
import Image from "next/image";
import dayatadbirlogo from "@/public/images/daya-tadbir-logo.png";
import { getSession } from "@/app/_libs/auth";
import NavbarButtons from "./NavbarButtons";

export default async function Navbar() {
  const session = await getSession();

  return (
    <nav>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          width: 1,
          height: 80,
          bgcolor: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        <Container maxWidth='lg' sx={{ padding: { lg: "0px !important" } }}>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <MuiLink href='/'>
              <Image
                src={dayatadbirlogo}
                width={120}
                style={{ height: "auto" }}
                alt='daya tadbir logo'
              />
            </MuiLink>

            <Stack direction='row' alignItems={"center"}>
              <NavbarButtons session={session} />
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </nav>
  );
}
