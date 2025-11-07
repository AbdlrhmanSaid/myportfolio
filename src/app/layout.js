import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abdelrhman Saeid | Front-End Developer Portfolio",
  description:
    "Portfolio of Abdelrhman Saeid - Experienced Front-End Developer specializing in React.js, Next.js, and TypeScript. 4+ years of experience creating beautiful, responsive, and user-friendly web experiences.",
  keywords: [
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer",
    "UI/UX",
    "Portfolio",
    "Abdelrhman Saeid",
  ],
  authors: [{ name: "Abdelrhman Saeid" }],
  openGraph: {
    title: "Abdelrhman Saeid | Front-End Developer Portfolio",
    description:
      "Experienced Front-End Developer specializing in React.js, Next.js, and TypeScript",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrhman Saeid | Front-End Developer Portfolio",
    description:
      "Experienced Front-End Developer specializing in React.js, Next.js, and TypeScript",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
