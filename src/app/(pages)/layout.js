import { Header } from "@/components/layout/Header";
import { Roboto_Slab } from 'next/font/google';
import 'sweetalert2/src/sweetalert2.scss';
import Footer from "@/components/layout/Footer/Footer";
import { headers } from "next/headers";

import "../globals.css";


const roboto = Roboto_Slab({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
