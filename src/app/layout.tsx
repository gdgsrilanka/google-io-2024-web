import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";


export const metadata: Metadata = {
  title: "Google I/O Extended Sri Lanka 2024",
  description: "Google I/O Extended Sri Lanka 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
