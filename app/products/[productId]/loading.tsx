import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  return (
    <Container maxWidth='lg' sx={{ padding: { lg: "0px !important" }, mt: 6 }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column-reverse" },
          justifyContent: "space-between",
          p: 4,
          gap: 10,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 10,
            direction: "ltr",

            p: 0,
          }}
        >
          <Box>
            <Skeleton>
              <Typography variant='h1' sx={{ fontSize: 24 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestias
                animi unde excepturi neque?
              </Typography>
            </Skeleton>
            <Skeleton>
              <Typography variant='body1' sx={{ color: "text.secondary", mt: 2 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto hic
                excepturi officiis tempora nam voluptatem, laudantium nobis in omnis nihil
                voluptatibus voluptates, minus est quia maiores. Beatae facilis doloribus
                id!
              </Typography>
            </Skeleton>
          </Box>
          <Box>
            <Skeleton>
              <Typography sx={{ fontSize: 24, color: "green", textAlign: "left" }}>
                99999999
              </Typography>
            </Skeleton>
            <Skeleton width={"100%"}>
              <Button variant='contained' sx={{ width: "100%", mt: 5 }}>
                افزودن به سبد
              </Button>
            </Skeleton>
          </Box>
        </CardContent>

        <Skeleton sx={{ width: "100%", height: 400 }}></Skeleton>
      </Card>
    </Container>
  );
}
