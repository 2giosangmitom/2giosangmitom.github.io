import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vo Quang Chien",
  description:
    "A full-stack developer from Viet Nam. Focus on React, Next.js, ASP.NET Core, Golang and build CLI tool with Rust",
  metadataBase: new URL("https://2giosangmitom.vercel.app"),
  authors: [
    {
      name: "Vo Quang Chien",
      url: "https://2giosangmitom.vercel.app",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://2giosangmitom.vercel.app",
    title: "Vo Quang Chien",
    description:
      "A full-stack developer from Viet Nam. Focus on React, Next.js, ASP.NET Core, Golang and build CLI tool with Rust",
    siteName: "Vo Quang Chien",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
