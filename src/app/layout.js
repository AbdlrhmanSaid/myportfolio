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
  creator: "Abdelrhman Saeid",
  publisher: "Abdelrhman Saeid",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Abdelrhman Saeid | Front-End Developer Portfolio",
    description:
      "Experienced Front-End Developer specializing in React.js, Next.js, and TypeScript",
    url: "https://asportfolio-mu.vercel.app",
    siteName: "Abdelrhman Saeid Portfolio",
    images: [
      {
        url: "https://asportfolio-mu.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdelrhman Saeid - Front-End Developer Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrhman Saeid | Front-End Developer Portfolio",
    description:
      "Experienced Front-End Developer specializing in React.js, Next.js, and TypeScript",
    images: ["https://asportfolio-mu.vercel.app/og-image.jpg"],
    creator: "@your_twitter_handle",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://api.emailjs.com" />
        <link rel="dns-prefetch" href="https://api.emailjs.com" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
