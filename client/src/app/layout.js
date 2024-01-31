import { Inter } from 'next/font/google'
import '../styles/globals.css'
import TitleBar from '@/components/TitleBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Malek Ben Ali',
  description: 'Web developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TitleBar />
        {children}

      </body>
    </html>
  )
}
