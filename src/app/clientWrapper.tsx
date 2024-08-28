"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Navbar />
      {children}
      <Footer />
    </SessionProvider>
  );
}
