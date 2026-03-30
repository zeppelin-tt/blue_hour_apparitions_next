import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blue Hour Apparitions',
  description: 'Blue Hour Apparitions — discography and streaming links',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
