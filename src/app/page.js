"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.profile}>
        <div className={styles.profileImage}>
          <Image
            src="/assets/images/avatar-jessica.jpeg"
            alt="Profile Picture"
            width={88}
            height={88}
            className={styles.profileImage}
          />
        </div>
        <h1 className={styles.name}>John Doe</h1>
        <h2 className={styles.address}>London, United Kingdom</h2>
        <p className={styles.bio}>"Front-end developer and avid reader."</p>
        <div className={styles.buttonList}>
          <button className={styles.button}>GitHub</button>
          <button className={styles.button}>Frontend Mentor</button>
          <button className={styles.button}>LinkdIn</button>
          <button className={styles.button}>Twitter</button>
          <button className={styles.button}>Instagram</button>
        </div>
      </div>
    </main>
  );
}
