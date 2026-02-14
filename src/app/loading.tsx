import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}>
        <div className={styles.microscope}>🔬</div>
      </div>
      <h2 className={styles.loadingText}>Loading Microbiome Data...</h2>
      <p className={styles.loadingSubtext}>Analyzing microorganisms...</p>
    </div>
  );
}
