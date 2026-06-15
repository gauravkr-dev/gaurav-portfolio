import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import { Caveat, Geist, Geist_Mono } from "next/font/google";
import Navbar from "./_components/Navbar/Navbar";
import FooterView from "./_components/footer/footer-view";
import Background from "@/components/background";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import { PageProgress } from "@/components/pageProgress";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Gaurav - Full Stack Web Developer",
  description: "Welcome to my portfolio! I'm Gaurav, a passionate full stack web developer with expertise in Next.js, TypeScript, MERN. Explore my projects and skills to see how I can bring your ideas to life.",
  icons: {
    icon: "/gaurav_logo21.png",
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.className} ${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <NextTopLoader
            color="#FF6900"
            height={2}
            showSpinner={false}
          />
          <Background />
          <Navbar />
          <PageProgress />
          {children}
          <FooterView />
        </Providers>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
