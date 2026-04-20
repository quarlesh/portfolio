import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { Analytics } from "@vercel/analytics/next"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Analytics/>
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}