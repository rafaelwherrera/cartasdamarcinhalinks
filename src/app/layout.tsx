import type React from "react"
import type { Metadata } from "next"
import { Cinzel, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cartas da Marcinha - Cartomante & Tarot",
  description: "Desvende os mistérios do universo através das cartas",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cinzel.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
