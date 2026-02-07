import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script'
import "./globals.css";
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/apexcharts.css'
import '../public/assets/css/dataTables.min.css'
import '../public/assets/css/slick.css'
import '../public/assets/css/full-calendar.css'
import '../public/assets/css/style.css'
import '../public/assets/css/prism.css'
import '../public/assets/css/jquery-jvectormap-2.0.5.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aplikasi Admin",
  description: "Admin Pintar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
         <Script
          src="/assets/js/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />

        {/* 2️⃣ DEPENDENT LIBRARIES */}
        <Script
          src="/assets/js/jquery-ui.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* 3️⃣ PLUGINS */}
        <Script
          src="/assets/js/dataTables.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/apexcharts.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/magnific-popup.min.js"
          strategy="afterInteractive"
        />

        {/* 4️⃣ CUSTOM SCRIPT (PALING AKHIR) */}
        <Script
          src="/assets/js/app.js"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}
