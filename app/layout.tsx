import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'DNS Solutions by STC',
  description: 'Comprehensive DNS and domain management solutions and knowledge base',
  generator: 'Next.js',
  icons: {
    icon: {
      url: '/DNS_Solutions_by_stc/browser tab icon.svg',
      type: 'image/svg+xml',
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
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
