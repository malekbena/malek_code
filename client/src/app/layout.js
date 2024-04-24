import TitleBar from '@/components/TitleBar'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import Explorer from '@/components/Explorer'
import Tabsbar from '@/components/Tabsbar'
import '../styles/globals.css'
import styles from '../styles/Layout.module.css'

export const metadata = {
  title: 'Malek Ben Ali',
  description: 'Web developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <TitleBar />
        <div className={styles.main}>
          <Sidebar />
          <Explorer />
          <div style={{ width: '100%' }}>
            <Tabsbar />
            <main id="main-editor" className={styles.content}>
              {children}
            </main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
