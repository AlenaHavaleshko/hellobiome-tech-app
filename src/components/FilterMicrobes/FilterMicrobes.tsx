"use client";

import type { MicrobeType } from "@/types/microbe";
import styles from "./FilterMicrobes.module.css";

type FilterOption = "all" | MicrobeType;

interface FilterMicrobesProps {
  value: FilterOption;
  onChange: (option: FilterOption) => void;
}

const filterOptions = [
  { value: "all" as FilterOption, label: "All", icon: "🔬" },
  { value: "bacteria" as FilterOption, label: "Bacteria", icon: "🦠" },
  { value: "fungi" as FilterOption, label: "Fungi", icon: "🍄" },
];

export default function FilterMicrobes({
  value,
  onChange,
}: FilterMicrobesProps) {
  return (
    <div className={styles.filterContainer}>
      <label className={styles.filterLabel}>Filter by Type</label>
      <div className={styles.filterButtons}>
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`${styles.filterButton} ${value === option.value ? styles.active : ""} ${styles[option.value]}`}
            aria-pressed={value === option.value}
          >
            <span className={styles.filterIcon}>{option.icon}</span>
            <span className={styles.filterText}>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
