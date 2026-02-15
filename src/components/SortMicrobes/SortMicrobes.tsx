"use client";

import { useGlobalStore } from "@/store/useGlobalStore";
import styles from "./SortMicrobes.module.css";

export function SortMicrobes() {
  const sortOrder = useGlobalStore((s) => s.sortOrder);
  const setSortOrder = useGlobalStore((s) => s.setSortOrder);
  const toggleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  return (
    <div className={styles.sortContainer}>
      <label className={styles.sortLabel}>Sort by Abundance</label>
      <button onClick={toggleSort} className={styles.sortButton}>
        <span className={styles.sortIcon}>
          {sortOrder === "asc" ? "↑" : "↓"}
        </span>
        <span className={styles.sortText}>
          {sortOrder === "asc" ? "Ascending" : "Descending"}
        </span>
        <span className={styles.sortBadge}>
          {sortOrder === "asc" ? "Low to High" : "High to Low"}
        </span>
      </button>
    </div>
  );
}
