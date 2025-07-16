import { Container, IconButton, Stack } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MuiLink from "./MuiLink";
import Image from "next/image";
import dayatadbirlogo from "@/public/images/daya-tadbir-logo.png";
import { getSession } from "@/app/_libs/auth";

export default async function Navbar() {
  const session = await getSession();

  return (
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
            {session ? (
              <MuiLink href='/cart'>
                <IconButton size='large'>
                  <LocalMallOutlinedIcon color='secondary' />
                </IconButton>
              </MuiLink>
            ) : (
              <MuiLink href='/login'>
                <IconButton size='large'>
                  <AccountCircleOutlinedIcon color='secondary' />
                </IconButton>
              </MuiLink>
            )}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
