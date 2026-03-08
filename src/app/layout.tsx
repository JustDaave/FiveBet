import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../styles/index.css'

export const metadata: Metadata = {
  title: 'FiveBet | Crypto Casino',
  description: "FiveM's premier crypto casino experience.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
