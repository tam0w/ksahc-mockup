import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { TopBar } from "@/components/top-bar"
import { FeedbackButton } from "@/components/feedback-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Karnataka State Allied & Healthcare Council",
  description: "Official website of Karnataka State Allied & Healthcare Council",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <TopBar />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <FeedbackButton />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
