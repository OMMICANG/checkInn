import type { Metadata } from "next";
import Head from 'next/head';
import "./globals.css";

export const metadata: Metadata = {
  title: "Check Inn Hotel | Coming Soon Landing Page",
  description: "Coming Soon - Check Inn Hotels, your perfect getaway in Ojodu, Berger. Hotel, Restaurant, Bar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Check-Inn Hotels - Coming Soon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Lobster&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo/Logo_-_Copy-removebg-preview.png" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
