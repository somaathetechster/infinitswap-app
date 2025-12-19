
import "../styles/globals.css";

export const metadata = {
  title: "Infinitswap — Financial Infrastructure for Africa",
  description: "Payments, virtual assets and automation infrastructure."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
