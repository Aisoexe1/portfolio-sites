import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ÉLAN Clinic — естетична косметологія в Києві",
  description: "Делікатна косметологія, сучасні протоколи та уважна консультація в ÉLAN Clinic.",
  openGraph: { title: "ÉLAN Clinic", description: "Естетична косметологія без зайвих обіцянок.", locale: "uk_UA", type: "website" },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="uk"><body>{children}</body></html>; }
