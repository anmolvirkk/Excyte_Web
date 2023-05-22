import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <svg className={styles.logo} version="1.0" xmlns="http://www.w3.org/2000/svg" width="682.667" height="682.667" viewBox="0 0 512 512"><path d="M319.8 92.3c-1.5.7-18.6 13.8-38 29.3-19.4 15.4-61.2 48.6-92.9 73.7-48.5 38.5-58 46.4-60 50.2-1.8 3.3-2.1 4.7-1.2 5.6.6.6 24.9 5.4 53.9 10.5 29 5.2 53 9.6 53.2 9.9.2.2-21.3 32.2-47.8 71.1-26.6 38.9-48.8 71.9-49.3 73.4-.6 1.5-.7 3.4-.4 4.4.9 2.2 6.5 2.1 9.7-.1 6.7-4.6 232.7-201.1 234.8-204.1 2.5-3.6 3.4-6.4 2.3-8-.6-1.1-13.3-2-55.5-4.1-30-1.5-54.8-2.9-55-3.2-.3-.4 7.2-14.8 41-78.8C322 108.1 328 95.9 328 95c0-3.7-3.4-4.9-8.2-2.7z"/></svg>
      </div>

    </main>
  )
}
