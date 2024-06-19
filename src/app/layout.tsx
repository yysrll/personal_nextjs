import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";
import Theme from "../../components/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yusril",
  description: "Welcome to my personal web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-white dark:bg-black ${inter.className} `}>
        <Theme>
          {children}
          <TopNav />
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
