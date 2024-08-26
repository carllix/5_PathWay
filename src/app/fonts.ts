import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const allright = localFont({
  src: "../assets/fonts/allright.otf",
  variable: "--font-allright",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});