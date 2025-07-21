import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dung Nguyen - Frontend Developer Portfolio",
  description:
    "Portfolio of Dung Nguyen, a motivated Frontend Developer with experience in ReactJS, React Native, TypeScript, and modern web technologies.",
  keywords: "Frontend Developer, ReactJS, React Native, TypeScript, JavaScript, Portfolio, Web Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
