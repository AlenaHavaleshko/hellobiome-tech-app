"use client";

import { useMemo, useEffect, useState } from "react";
import { useGlobalStore } from "@/store/useGlobalStore";
import type { Microbe } from "@/types/microbe";
import { SortMicrobes } from "@/components/SortMicrobes/SortMicrobes";
import FilterMicrobes from "@/components/FilterMicrobes/FilterMicrobes";
import MicrobeList from "@/components/MicrobeList/MicrobeList";
import Pagination from "@/components/Pagination/Pagination";
import styles from "./MicrobeExplorer.module.css";

const ITEMS_PER_PAGE = 9;

interface MicrobeExplorerProps {
  initialMicrobes: Microbe[];
}

export default function MicrobeExplorer({
  initialMicrobes,
}: MicrobeExplorerProps) {
  const filterOption = useGlobalStore((s) => s.filterOption);
  const sortOrder = useGlobalStore((s) => s.sortOrder);
  const currentPage = useGlobalStore((s) => s.currentPage);

  const sortedAndFilteredMicrobes = useMemo(() => {
    let result: Microbe[] = [...initialMicrobes];

    if (filterOption !== "all") {
      result = result.filter((microbe) => microbe.type === filterOption);
    }
    if (sortOrder === "asc") {
      result.sort((a, b) => a.abundance - b.abundance);
    } else if (sortOrder === "desc") {
      result.sort((a, b) => b.abundance - a.abundance);
    }
    return result;
  }, [initialMicrobes, sortOrder, filterOption]);

  const totalPages = Math.ceil(
    sortedAndFilteredMicrobes.length / ITEMS_PER_PAGE,
  );

  const paginatedMicrobes = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return sortedAndFilteredMicrobes.slice(startIndex, endIndex);
  }, [sortedAndFilteredMicrobes, currentPage]);

  // Scroll-to-top button
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.decorCircle1}></div>
        <div className={styles.decorCircle2}></div>
        <div className={styles.decorCircle3}></div>

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
            <div className={styles.statValue}>{initialMicrobes.length}</div>
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
          <FilterMicrobes />
          <SortMicrobes />
        </div>

        <MicrobeList microbes={paginatedMicrobes} />

        <Pagination totalPages={totalPages} />
      </main>

      <footer className={styles.footer}>
        <p>Microbiome Research Dashboard © 2026</p>
      </footer>

      {showScrollTop && (
        <button
          className={styles.scrollTopBtn}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <span style={{ fontSize: "1.5em", display: "block" }}>↑</span> top
        </button>
      )}
    </div>
  );
}
