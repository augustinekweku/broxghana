import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brox technology",
  description: "Creating the best digital experience for businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Brox technology </title>
        <link
          rel="icon"
          href="/assets/images/brox-icon.svg"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
