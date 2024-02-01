import TitleBar from '@/components/TitleBar'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import Explorer from '@/components/Explorer'
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
          <Explorer />
          <div>
          {children}

          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
