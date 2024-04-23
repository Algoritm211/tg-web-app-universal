import React from 'react';

import './globals.css';
import Providers from "@/app/providers";
import {Layout} from "@/system/layout";

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <script src="https://telegram.org/js/telegram-web-app.js"></script>
    </head>
    <body>
    <Providers>
      <Layout>
        {children}
      </Layout>
    </Providers>
    </body>
    </html>
  );
}
