import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../styles/global.css"
import { Toaster } from "react-hot-toast"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Kushagra - Portfolio",
    template: "%s | Kushagra"
  },
  description: "Portfolio of Kushagra - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Kushagra", "Portfolio", "Full Stack Developer", "React", "Next.js", "Node.js", "Web Developer"],
  authors: [{ name: "Kushagra" }],
  creator: "Rinkit Adhana",
  metadataBase: new URL("https://kushagra-portfolio.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Kushagra - Portfolio",
    description: "Portfolio of Kushagra - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "",
    siteName: "Switchfolio",
    images: [
      {
        url: "/assets/images/vegeta.jpg",
        width: 1200,
        height: 630,
        alt: "Kushagra - Portfolio"
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushagra - Portfolio",
    description: "Portfolio of Kushagra - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/assets/images/vegeta.jpg"],
    creator: "@Finetunedxd",
  },
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="msapplication-TileImage" content="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  )
}