"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <div className={styles.errorIcon}>⚠️</div>
        <h2 className={styles.errorTitle}>Oops! Something went wrong</h2>
        <p className={styles.errorMessage}>
          We encountered an error while loading the microbiome data.
        </p>
        {error.message && (
          <p className={styles.errorDetails}>{error.message}</p>
        )}
        <div className={styles.errorActions}>
          <button onClick={() => reset()} className={styles.retryButton}>
            Try again
          </button>
          <Link href="/" className={styles.homeButton}>
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
