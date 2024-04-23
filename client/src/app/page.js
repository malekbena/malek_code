import Link from 'next/link'
import Illustration from '@/components/Illustration'
import { CustomLink } from '@/components/Buttons'
import styles from '@/styles/HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <p>I BUILD</p>
          <p>WEBSITES</p>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h3 className={styles.name}>Malek Ben Ali</h3>
            <h6 className={styles.bio}>Développeur web</h6>
            <div className={styles.links}>
              <CustomLink text="A Propos De Moi" href="/about" />
              <CustomLink text="Mes Projets" href="/projects" />
              <CustomLink text="Me Contacter" href="/contact" />
            </div>

          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}
