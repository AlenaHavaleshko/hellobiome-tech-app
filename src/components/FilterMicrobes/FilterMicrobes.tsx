"use client";

import { useGlobalStore } from "@/store/useGlobalStore";

type FilterOption = "all" | "bacteria" | "fungi";
import styles from "./FilterMicrobes.module.css";

const filterOptions = [
  { value: "all", label: "All", icon: "🔬" },
  { value: "bacteria", label: "Bacteria", icon: "🦠" },
  { value: "fungi", label: "Fungi", icon: "🍄" },
];

export default function FilterMicrobes() {
  const filterOption = useGlobalStore((s) => s.filterOption);
  const setFilterOption = useGlobalStore((s) => s.setFilterOption);
  return (
    <div className={styles.filterContainer}>
      <label className={styles.filterLabel}>Filter by Type</label>
      <div className={styles.filterButtons}>
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setFilterOption(option.value as FilterOption)}
            className={`${styles.filterButton} ${filterOption === option.value ? styles.active : ""} ${styles[option.value]}`}
            aria-pressed={filterOption === option.value}
          >
            <span className={styles.filterIcon}>{option.icon}</span>
            <span className={styles.filterText}>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
