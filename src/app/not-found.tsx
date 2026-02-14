import styles from "./not-found.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <div className={styles.notFoundIcon}>🔬</div>
        <h1 className={styles.notFoundTitle}>404</h1>
        <h2 className={styles.notFoundSubtitle}>Microorganism Not Found</h2>
        <p className={styles.notFoundMessage}>
          The page you&apos;re looking for doesn&apos;t exist in our microbiome
          database.
        </p>
        <Link href="/" className={styles.homeLink}>
          Return to Explorer
        </Link>
      </div>
    </div>
  );
}
