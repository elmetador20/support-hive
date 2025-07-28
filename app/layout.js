import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";
import Script from "next/script";
import CursorEffect from "@/ui/CusorEffect";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
         <SessionWrapper>
        
        <div className="relative min-h-[86vh]">
         
          <Navbar />

          <div className="absolute inset-0 -z-30 overflow-hidden">
  {/* Animated blobs background layer */}
<div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
  <div className="absolute w-[40vw] h-[40vw] bg-pink-500 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob1 top-0 left-0" />
  <div className="absolute w-[35vw] h-[35vw] bg-blue-500 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob2 top-1/2 left-1/3" />
  <div className="absolute w-[45vw] h-[45vw] bg-yellow-400 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob3 top-1/4 left-2/3" />
</div>

</div>{children}
        </div>
        <Footer />
        </SessionWrapper>
       
      <CursorEffect/>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
        
      </body>
    </html>
  );
}