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
        <h1 className={styles.name}>Jessica Randall</h1>
        <h2 className={styles.address}>London, United Kingdom</h2>
        <p className={styles.bio}>"Front-end developer and avid reader."</p>
        <div className={styles.buttonList}>
          <a
            className={styles.button}
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className={styles.button}
            href="https://www.frontendmentor.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          <a
            className={styles.button}
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className={styles.button}
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            className={styles.button}
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </main>
  );
}
