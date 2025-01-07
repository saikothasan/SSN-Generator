import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SSN Generator | Educational Tool for Understanding SSN Format',
    template: '%s | SSN Generator'
  },
  description: 'Generate SSN-like numbers for educational and testing purposes. Learn about SSN structure and format without using real personal information.',
  keywords: 'SSN generator, Social Security Number, educational tool, testing, development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

