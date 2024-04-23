// 일반 페이지
export default function NonLoginPageLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full px-4">
      <div className="w-full fixed h-11 bg-white"></div>
      <div className="py-16">{children}</div>
      <div className="w-full fixed h-11 bg-white"></div>
    </main>
  );
}
