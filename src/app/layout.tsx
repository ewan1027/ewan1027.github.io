import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Montserrat } from "next/font/google";
import ClientBody from "./ClientBody";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Ewan Dirubut | Software Engineer Portfolio",  // Updated title
  description: "Portfolio showcasing the skills and projects of Ewan Dirubut, an aspiring software engineer.",  // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
