import type { Metadata } from "next";
import "./globals.css";
import { InaugurationPopup } from "@/components/inauguration-popup";

export const metadata: Metadata = {
  title: "SIMWA | Sirajul Islam Madrassa Welfare Association",
  description: "A modern, elegant website for SIMWA with news, gallery, committee profiles, learning content, and community outreach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <InaugurationPopup />
        {children}
      </body>
    </html>
  );
}
