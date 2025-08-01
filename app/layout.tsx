import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import localFont from 'next/font/local';
import { CssBaseline } from '@mui/material';
import type { Metadata } from 'next';

import Navbar from '@/app/_components/NavBar';
import Footer from '@/app/_components/Footer';
import { CartStoreProvider } from './_store/cart-store-provider';
import QueryProvider from './_components/QueryProvider';

export const yekan = localFont({
  src: '../public/fonts/yekan-regular.woff',
  display: 'swap',
  variable: '--font-yekan', // optional for CSS custom property
});

export const metadata: Metadata = {
  title: { template: 'فروشگاه دایا تدبیر | %s', default: 'فروشگاه دایا تدبیر' },
  description: 'an ecommerce project created with next@15, mui and ...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl" className={yekan.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <QueryProvider>
              <CartStoreProvider>
                <Navbar />

                {children}

                <Footer />
              </CartStoreProvider>
            </QueryProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
