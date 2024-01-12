import { Inter } from "next/font/google";
import "./globals.css";
import MouseTrail from "@/components/molecules/common/MouseTrail";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HACKOFIESTA",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MouseTrail />
        {children}
      </body>
    </html>
  );
}
