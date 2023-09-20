import Header from "@/components/layouts/Header";
import "./globals.css";
import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`h-screen ${inter.className}`}>
        <Header />
        {/* {pathname === ("/login" || "/register") ? null : <Header />} */}
        {children}
      </body>
    </html>
  );
}
