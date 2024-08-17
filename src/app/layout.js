import { Inter } from "next/font/google";

import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "webcosmic",
  description: "WebCosmic is a cutting-edge freelance agency specializing in web development, design, and digital solutions. Our team of experts delivers top-notch services tailored to your business needs, including custom websites, e-commerce platforms, and digital marketing strategies. Partner with us to elevate your online presence and achieve your goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
