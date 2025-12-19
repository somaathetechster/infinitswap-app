import "../styles/globals.css";

export const metadata = {
  title: "Infinitswap — Financial Infrastructure for Africa",
  description:
    "Compliant payments, virtual asset services, and automation infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}


