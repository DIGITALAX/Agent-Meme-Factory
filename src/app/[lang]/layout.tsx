import './../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agent Meme Factory',
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}