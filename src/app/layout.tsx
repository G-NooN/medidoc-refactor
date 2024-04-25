import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "MediDoc",
  description: "Best choice for medical checkup"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-Pretendard h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
