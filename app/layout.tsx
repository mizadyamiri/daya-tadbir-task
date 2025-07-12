import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import localFont from "next/font/local";
import { Container, CssBaseline } from "@mui/material";
import type { Metadata } from "next";

export const yekan = localFont({
  src: "../public/fonts/yekan-regular.woff",
  display: "swap",
  variable: "--font-yekan", // optional for CSS custom property
});

export const metadata: Metadata = {
  title: { template: "فروشگاه تدبیر دایا | %s", default: "فروشگاه تدبیر دایا" },
  description: "an ecommerce project created with next@15, mui and ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa-IR' dir='rtl' className={yekan.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>{children}</Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
