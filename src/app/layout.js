import { Inter } from "next/font/google";
import TopMenu from "@/app/components/TopMenu";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mrs Miggins Pies",
  description: "Darn fine pies, by any standards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Header/>
          <TopMenu/>
          <div id="wrapper">
        {children}
        </div>
        </>
        <Footer />
      </body>
    </html>
  );
}
