"use client";

import { useMemo, useState } from "react";
import type { Microbe } from "@/types/microbe";
import SortMicrobes from "@/components/SortMicrobes/SortMicrobes";
import FilterMicrobes from "@/components/FilterMicrobes/FilterMicrobes";
import MicrobeList from "@/components/MicrobeList/MicrobeList";
import Pagination from "@/components/Pagination/Pagination";
import styles from "./MicrobeExplorer.module.css";

type SortOrder = "asc" | "desc";
type FilterOption = "all" | "bacteria" | "fungi";

const ITEMS_PER_PAGE = 9;

interface MicrobeExplorerProps {
  initialMicrobes: Microbe[];
}

export default function MicrobeExplorer({
  initialMicrobes,
}: MicrobeExplorerProps) {
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [filterOption, setFilterOption] = useState<FilterOption>("all");
  const [currentPage, setCurrentPage] = useState(1);

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of the list
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (option: FilterOption) => {
    setFilterOption(option);
    setCurrentPage(1);
  };

  const handleSortChange = (order: SortOrder) => {
    setSortOrder(order);
    setCurrentPage(1);
  };

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
          <FilterMicrobes value={filterOption} onChange={handleFilterChange} />
          <SortMicrobes value={sortOrder} onChange={handleSortChange} />
        </div>

        <MicrobeList microbes={paginatedMicrobes} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>

      <footer className={styles.footer}>
        <p>Microbiome Research Dashboard © 2026</p>
      </footer>
    </div>
  );
}
