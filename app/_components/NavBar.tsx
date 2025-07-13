import { Container, Stack } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MuiLink from "./MuiLink";
import Image from "next/image";
import dayatadbirlogo from "@/public/images/daya-tadbir-logo.png";

const Navbar = () => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ width: 1, height: 60, backgroundColor: "#fff" }}
    >
      <Container maxWidth='lg' sx={{ padding: { lg: "0px !important" } }}>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <MuiLink href='/'>
            <Image src={dayatadbirlogo} width={80} height={25} alt='daya tadbir logo' />
          </MuiLink>

          <Stack direction='row' alignItems={"center"} gap={2}>
            <MuiLink href='/cart'>
              <LocalMallOutlinedIcon
                sx={{ height: "auto", my: "auto" }}
                color='secondary'
                fontSize='medium'
              />
            </MuiLink>

            <MuiLink href='/login'>
              <AccountCircleOutlinedIcon color='secondary' fontSize='medium' />
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Navbar;
