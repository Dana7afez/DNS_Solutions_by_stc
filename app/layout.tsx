import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DNS Solutions by STC',
  description: 'Comprehensive DNS and domain management solutions and knowledge base',
  generator: 'Next.js',
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
