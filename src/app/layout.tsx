import type { Metadata } from "next";
import { allright, poppins } from "./fonts";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ClientWrapper from "./clientWrapper";

export const metadata: Metadata = {
  title: "PathWay",
  description: "Platform Informasi Beasiswa dan Lomba",
  icons: {
    icon: "/logo-pathway.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${allright.variable}`}>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
