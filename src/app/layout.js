// app/layout.js
"use client"; // Import this to enable hooks in a server component

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";
import { fetchCategories } from "@/utils/apiHelper"; // Adjust the import according to your project structure
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import ProgressBar from "../../components/progressBar/ProgressBar";
// Adjust the import according to your project structure

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, pageProps ={} }) {
  const { hideHeader, hideFooter } = pageProps; // Accept conditional flags
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
      <body className={inter.className}>
        <ProgressBar />
       <Header categories={categories} loading={loading} error={error} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
