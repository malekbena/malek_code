import TitleBar from '@/components/TitleBar'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import '../styles/globals.css'
import styles from '../styles/layout.module.css'

export const metadata = {
  title: 'Malek Ben Ali',
  description: 'Web developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TitleBar />
        <div className={styles.main}>
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
