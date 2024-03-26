import type { Metadata } from "next";
import "@/app/globals.css";
import { inter } from "@/lib/fonts";
import Providers from "@/components/providers";
import Sidebar from "@/components/management/sidebar/sidebar";
import NextTopLoader from "nextjs-toploader";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "Management | Dashboard",
    template: "Management | %s",
  },
  description:
    "Quản lý trang thông tin dành cho sinh viên trường Đại học Công nghệ Đông Á (EAUT)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} gap:1 flex bg-secondary pr-1 text-foreground md:gap-3`}
      >
        <Providers>
          <NextTopLoader />
          <Sidebar />
          <main className="flex h-screen w-full flex-col">{children}</main>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
