import type { Metadata } from "next";
import { Geist } from "next/font/google";
// import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
// import Hero from "../components/Hero";
// import BackgroundAnimation from "@/components/BackgroundAnimation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { auth } from "@/auth";
import SignedInHeader from "@/components/SignedInHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emergence",
  description: "A platform for education",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth.api.getSession

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} font-light antialiased grid grid-cols-12 gap-6 col-span-full bg-gray-50 text-gray-900`}
      >
        {/* <ClerkProvider> */}
        {/* <div className="fixed -z-20 top-0 left-0 h-screen w-full bg-linear-to-b from-gray-100 via-lime-100 to-lime-200">
          <BackgroundAnimation />
        </div> */}
        <main className="grid grid-cols-subgrid col-span-full backdrop-blur-xs">
          {!session ? <Header/> : <SignedInHeader />  }
          {/* <Header />  */}
          {children}
          <Footer />
        </main>
        {/* </ClerkProvider> */}
      </body>
    </html>
  );
}
