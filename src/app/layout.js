// app/layout.js
"use client"; // Import this to enable hooks in a server component
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Script from 'next/script'; // Import next/script
import "./globals.css";
import ProgressBar from "../../components/progressBar/ProgressBar";
import { GOOGLE_TAG_MANAGER } from "../../lib/config";

// Dynamically Imported Components
const Header = dynamic(() => import("../../components/header/header"));
const Footer = dynamic(() => import("../../components/footer/Footer"));





const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, pageProps = {} }) {
  const { hideHeader, hideFooter } = pageProps; // Accept conditional flags
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { fetchCategories } = await import("@/utils/apiHelper");
        const data = await fetchCategories();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load categories");
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Run only once on mount

  return (
    <html lang="en">
      <head>
        {/* ======================== Google Analytics ======================================= */}
        <Script
          strategy="afterInteractive"
          src={GOOGLE_TAG_MANAGER}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BEZGEP0WZN');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ProgressBar />
        {!hideHeader && <Header categories={categories} loading={loading} error={error} />}
        <main>{children}</main>
        {!hideFooter && <Footer />}
      </body>
    </html>
  );
}
