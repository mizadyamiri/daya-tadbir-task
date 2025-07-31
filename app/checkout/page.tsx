import Container from "@mui/material/Container";
import { Metadata } from "next";
import CheckoutForm from "../_components/CheckoutForm";

export const metadata: Metadata = {
  title: "تکمیل خرید",
};

export default function Page() {
  return (
    <Container maxWidth='xs' sx={{ padding: { lg: "0px !important" }, my: 6 }}>
      <CheckoutForm />
    </Container>
  );
}
