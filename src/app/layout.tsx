import Header from "@/components/layouts/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loader from "@/components/Loader";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "x - store",
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
        <Suspense fallback={<Loader />}>
          <Header />
          {children}
          <Toaster position="top-right" />
        </Suspense>
      </body>
    </html>
  );
}
