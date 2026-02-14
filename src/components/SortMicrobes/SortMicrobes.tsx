"use client";

import styles from "./SortMicrobes.module.css";

type SortOrder = "asc" | "desc";

interface SortMicrobesProps {
  value: SortOrder;
  onChange: (order: SortOrder) => void;
}

export default function SortMicrobes({ value, onChange }: SortMicrobesProps) {
  const toggleSort = () => {
    const newValue = value === "asc" ? "desc" : "asc";
    onChange(newValue);
  };

  return (
    <div className={styles.sortContainer}>
      <label className={styles.sortLabel}>Sort by Abundance</label>
      <button onClick={toggleSort} className={styles.sortButton}>
        <span className={styles.sortIcon}>{value === "asc" ? "↑" : "↓"}</span>
        <span className={styles.sortText}>
          {value === "asc" ? "Ascending" : "Descending"}
        </span>
        <span className={styles.sortBadge}>
          {value === "asc" ? "Low to High" : "High to Low"}
        </span>
      </button>
    </div>
  );
}
