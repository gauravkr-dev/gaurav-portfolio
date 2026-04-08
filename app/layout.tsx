import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
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
      className={`${syne.className} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
