import { Header } from "@/components/layout/Header";
import { Roboto_Slab } from 'next/font/google';
import 'sweetalert2/src/sweetalert2.scss';
import Footer from "@/components/layout/Footer/Footer";

import "../globals.css";
import { projectfor } from "@/constants/projectfor";
import { headers } from "next/headers";

const roboto = Roboto_Slab({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });

export async function generateMetadata() {

  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const clientUrlWithPath = process.env.NEXT_PUBLIC_CLIENT_URL + pathname


  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${apiUrl}/api/metadata?projectFor=${projectfor}&pageLink=${clientUrlWithPath}`, {
      cache: "no-store",
    });
    const data = await response.json();

    const { title, description, keywords } = data?.data[0] ?? {};

    const gglverificationResponse = await fetch(`${apiUrl}/api/site-verification?projectFor=${projectfor}`, {
      cache: "no-store",
    });

    const gVerificationData = await gglverificationResponse.json();

    const verificationContent = gVerificationData?.data?.[0]?.url

    return {
      title: title || "Rain Coupon",
      description: description || "Rain Coupon",
      keywords: keywords || "Rain Coupon",
      openGraph: {
        title: title || "Rain Coupon",
        description: description || "Rain Coupon",
      },
      verification: {
        google: verificationContent || "",
      },
      alternates: {
        canonical: clientUrlWithPath,
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    };

  } catch (error) {
    return {
      title: "Home",
      description: "Home",
      keywords: "Rain Coupon",
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <div><Header /></div>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
