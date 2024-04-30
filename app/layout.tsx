import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const font = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vo Quang Chien | Web Developer - Calisthenics Enthusiast",
  description:
    "Discover the dynamic world of Vo Quang Chien, where he excels as a web developer, creates innovative Neovim plugins, and embraces the discipline of calisthenics. Explore his diverse portfolio to witness his achievements and expertise.",
  keywords: ["Web developer", "Vo Quang Chien", "Neovim"],
  authors: [{ name: "Vo Quang Chien", url: "https://2giosangmitom.is-a.dev/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-slate-900 text-slate-200 xl:p-20`}>{children}</body>
    </html>
  );
}
