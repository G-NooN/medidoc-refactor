// 로그인 페이지
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediDoc-Login",
  description: "Best choice for medical checkup"
};

export default function LoginPageLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="h-full px-4 py-16 bg-orange">{children}</main>;
}
