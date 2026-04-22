import type React from "react"
import type { Metadata } from "next"
import { Epilogue, Manrope } from "next/font/google"
import "./globals.css"

const epilogue = Epilogue({ 
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
})

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dung Nguyen | Software Engineer",
  description:
    "Portfolio of Dung Nguyen, a software engineer specializing in high-performance web and mobile applications with .NET, React, and Salesforce.",
  keywords: "Software Engineer, Full Stack, .NET, React, Salesforce, Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${epilogue.variable} ${manrope.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
