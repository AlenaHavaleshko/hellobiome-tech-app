"use client";

import { useMemo, useState } from "react";
import { microbes } from "@/data/microbes";
import { Microbe } from "@/types/microbe";
import SortMicrobes from "@/components/SortMicrobes/SortMicrobes";
import FilterMicrobes from "@/components/FilterMicrobes/FilterMicrobes";
import MicrobeList from "@/components/MicrobeList/MicrobeList";
import styles from "./page.module.css";

type SortOrder = "asc" | "desc";
type FilterOption = "all" | "bacteria" | "fungi";

export default function Home() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [filterOption, setFilterOption] = useState<FilterOption>("all");

  const sortedAndFilteredMicrobes = useMemo(() => {
    let result: Microbe[] = [...microbes];

    if (filterOption !== "all") {
      result = result.filter((microbe) => microbe.type === filterOption);
    }
    if (sortOrder === "asc") {
      result.sort((a, b) => a.abundance - b.abundance);
    } else if (sortOrder === "desc") {
      result.sort((a, b) => b.abundance - a.abundance);
    }
    return result;
  }, [sortOrder, filterOption]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerIcon}>🔬</div>
          <div className={styles.headerText}>
            <h1 className={styles.title}>Skin Microbiome Explorer</h1>
            <p className={styles.subtitle}>
              Discover and analyze the diverse microorganisms living on human
              skin
            </p>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{microbes.length}</div>
            <div className={styles.statLabel}>Total Microbes</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>
              {sortedAndFilteredMicrobes.length}
            </div>
            <div className={styles.statLabel}>Filtered Results</div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.controls}>
          <FilterMicrobes value={filterOption} onChange={setFilterOption} />
          <SortMicrobes value={sortOrder} onChange={setSortOrder} />
        </div>

        <MicrobeList microbes={sortedAndFilteredMicrobes} />
      </main>

      <footer className={styles.footer}>
        <p>Microbiome Research Dashboard © 2026</p>
      </footer>
    </div>
  );
}
