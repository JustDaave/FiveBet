import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../styles/index.css'
export const metadata: Metadata = {
  title: 'FiveBet | Crypto Casino',
  description: "FiveM's premier crypto casino experience.",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon-32x32.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
