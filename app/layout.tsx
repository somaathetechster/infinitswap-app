import "../styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Infinitswap — Financial Infrastructure for Africa",
  description:
    "Compliant payments, virtual asset services, and automation infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

