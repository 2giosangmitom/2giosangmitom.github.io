import type { Metadata } from 'next';
import { Fira_Sans } from 'next/font/google';
import './globals.css';

const font = Fira_Sans({
  weight: ['100', '200', '300', '400', '500', '600'],
  style: 'normal',
  subsets: ['vietnamese', 'latin'],
});

export const metadata: Metadata = {
  title: 'Võ Quang Chiến',
  description: 'My personal website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>{children}</body>
    </html>
  );
}
