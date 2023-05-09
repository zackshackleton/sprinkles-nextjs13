"use client";

import * as styles from './page.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <button className={styles.buttonWithStyle}>Button created with style</button>
      <button className={styles.buttonWithSprinkles}>Button created with sprinkles</button>
    </main>
  )
}
