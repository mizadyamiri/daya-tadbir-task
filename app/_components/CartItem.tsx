import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Products } from "@/app/_libs/data-services";
import Image from "next/image";

export default function CartItem({ cartItem }: { cartItem: Products }) {
  return (
    <Grid
      container
      gap={4}
      direction={{ xs: "column", md: "row" }}
      sx={{
        direction: "ltr",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 7,
      }}
    >
      <Grid size={"auto"}>
        <Image
          src={cartItem.image}
          alt={cartItem.title}
          width={100}
          height={100}
          style={{ objectFit: "contain" }}
        />
      </Grid>
      <Grid size={"grow"}>
        <Typography variant='h2' fontSize={18}>
          {cartItem.title}
        </Typography>
      </Grid>

      <Grid size={"auto"} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography variant='body1' fontSize={18} color='green'>
          {cartItem.price}
        </Typography>

        <IconButton size='small'>
          <RemoveIcon fontSize='small' />
        </IconButton>
        <Typography variant='body1' fontSize={18}>
          {1}
        </Typography>
        <IconButton size='small'>
          <AddIcon fontSize='small' />
        </IconButton>

        <Typography variant='body1' fontSize={18}>
          total price
        </Typography>
      </Grid>
    </Grid>
  );
}
