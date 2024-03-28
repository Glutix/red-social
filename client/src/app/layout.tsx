import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/ui/fonts/fonts";

export const metadata: Metadata = {
  title: "Gods",
  description:
    "App con fines educativo. Se trata de una red socials donde las personas puede comunicarse entre si.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
