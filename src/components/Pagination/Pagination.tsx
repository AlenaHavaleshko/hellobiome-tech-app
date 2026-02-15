import styles from "./Pagination.module.css";

import { useGlobalStore } from "@/store/useGlobalStore";
interface PaginationProps {
  totalPages: number;
}

function Pagination({ totalPages }: PaginationProps) {
  const currentPage = useGlobalStore((s) => s.currentPage);
  const setCurrentPage = useGlobalStore((s) => s.setCurrentPage);
  // Hide pagination
  if (!totalPages || totalPages <= 1) {
    return null;
  }

  const validCurrentPage = Math.max(1, Math.min(currentPage || 1, totalPages));
  const validTotalPages = totalPages;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 3;

    if (validTotalPages <= maxVisiblePages + 2) {
      // Show all pages if total is small
      for (let i = 1; i <= validTotalPages; i++) {
        pages.push(i);
      }
    } else {

      pages.push(1);

      if (validCurrentPage <= 3) {

        for (let i = 2; i <= Math.min(4, validTotalPages - 1); i++) {
          pages.push(i);
        }
        if (validTotalPages > 4) {
          pages.push("...");
        }
        if (validTotalPages > 1) {
          pages.push(validTotalPages);
        }
      } else if (validCurrentPage >= validTotalPages - 2) {

        pages.push("...");
        for (
          let i = Math.max(2, validTotalPages - 3);
          i <= validTotalPages;
          i++
        ) {
          pages.push(i);
        }
      } else {

        pages.push("...");
        pages.push(validCurrentPage - 1);
        pages.push(validCurrentPage);
        pages.push(validCurrentPage + 1);
        pages.push("...");
        pages.push(validTotalPages);
      }
    }


    return pages.filter((page, index, self) => {
      if (typeof page === "string") return true; 
      if (typeof page !== "number") return false; 
      if (page < 1 || page > validTotalPages) return false; 

      return self.indexOf(page) === index;
    });
  };

  const handleFirstPage = () => setCurrentPage(1);
  const handlePrevPage = () => {
    if (validCurrentPage > 1) setCurrentPage(validCurrentPage - 1);
  };
  const handleNextPage = () => {
    if (validCurrentPage < validTotalPages)
      setCurrentPage(validCurrentPage + 1);
  };
  const handleLastPage = () => setCurrentPage(validTotalPages);
  const handlePageClick = (page: number) => setCurrentPage(page);

  const pageNumbers = getPageNumbers();
  const isFirstPage = validCurrentPage === 1;
  const isLastPage = validCurrentPage === validTotalPages;

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.paginationButton} ${styles.arrowButton}`}
        onClick={handleFirstPage}
        disabled={isFirstPage}
        aria-label="Go to first page"
      >
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M12 2L6 8L12 14M8 2L2 8L8 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className={`${styles.paginationButton} ${styles.arrowButton}`}
        onClick={handlePrevPage}
        disabled={isFirstPage}
        aria-label="Go to previous page"
      >
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M10 2L4 8L10 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={styles.pageNumbers}>
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                ...
              </span>
            );
          }

          if (typeof page !== "number") {
            return null; 
          }

          return (
            <button
              key={`page-${page}`}
              className={`${styles.paginationButton} ${styles.pageButton} ${
                page === validCurrentPage ? styles.active : ""
              }`}
              onClick={() => handlePageClick(page)}
              aria-label={`Go to page ${page}`}
              aria-current={page === validCurrentPage ? "page" : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        className={`${styles.paginationButton} ${styles.arrowButton}`}
        onClick={handleNextPage}
        disabled={isLastPage}
        aria-label="Go to next page"
      >
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M6 2L12 8L6 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className={`${styles.paginationButton} ${styles.arrowButton}`}
        onClick={handleLastPage}
        disabled={isLastPage}
        aria-label="Go to last page"
      >
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M4 2L10 8L4 14M8 2L14 8L8 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
