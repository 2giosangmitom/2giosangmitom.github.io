import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
