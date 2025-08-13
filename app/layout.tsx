import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const baseUrl = "";

export const metadata: Metadata = {
  title: " Nyangbari Farcaster Test MiniApp",
  description: " Nyangbari Farcaster Test MiniApp",
  openGraph: {
    title: " Nyangbari Farcaster Test MiniApp",
    description: "Test Farcaster MiniApp with wallet and auth",
    images: ["/hotteok.jpg"],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "/hotteok.jpg",
    "fc:frame:button:1": "Open MiniApp",
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": baseUrl,
    "of:version": "vNext",
    "of:accepts:xmtp": "2024-02-01",
    "of:image": "/hotteok.jpg",
    "of:image:type": "image/jpeg",
    "of:button:1": "Open MiniApp",
    "of:button:1:action": "link",
    "of:button:1:target": baseUrl,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://auth.farcaster.xyz" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
