import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bahsoun Sells",
  description:
    "Local resale help for turning unwanted items into cash without the listing work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
