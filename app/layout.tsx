import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '🚑 RescueChat - Chatbot Hỗ Trợ Sơ Cứu',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
