import Container from "@mui/material/Container";
import CartItem from "../_components/CartItem";
import { Stack, Typography, Paper, Button } from "@mui/material";
import { Metadata } from "next";

const mockCart = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
];

export const metadata: Metadata = {
  title: "سبد خرید",
};

export default function page() {
  if (mockCart.length === 0)
    return (
      <Stack alignItems='center' gap={5} sx={{ my: 20 }}>
        <Typography
          sx={{ fontSize: { xs: 50, md: 60 }, textAlign: "center" }}
          variant='h1'
        >
          سبد خالی است!
        </Typography>
      </Stack>
    );

  return (
    <Container
      maxWidth='lg'
      sx={{
        py: 2,
        my: 6,
      }}
    >
      <Paper elevation={8} sx={{ bgcolor: "#fff", p: 3 }}>
        {mockCart.map(cart => (
          <CartItem cartItem={cart} key={cart.id} />
        ))}

        <Button variant='contained' size='large' sx={{ width: { xs: "100%", md: 220 } }}>
          ثبت نهایی (99999 تومان)
        </Button>
      </Paper>
    </Container>
  );
}
