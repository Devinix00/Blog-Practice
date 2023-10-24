import Link from "next/link";
import styles from "./Pagination.module.scss";
import React from "react";
import usePagination from "@/hooks/pagination/usePagination/usePagination";

function Pagination({ currentPage, setCurrentPage }: IPaginationProps) {
  const {
    handleClick,
    goToFirstPage,
    goToLastPage,
    visiblePageNumbers,
    maxPageNum,
  } = usePagination({ currentPage, setCurrentPage });

  return (
    <>
      <nav className={styles.container}>
        <ul className={styles.pagination}>
          <li>
            <Link
              href="#"
              onClick={(event) => goToFirstPage(event)}
              className={`${styles.pageLink} ${
                currentPage === 1 ? styles.disabled : null
              }`}
            >
              {"<<"}
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={(event) => handleClick(event, currentPage - 1)}
              className={`${styles.pageLink} ${
                currentPage === 1 ? styles.disabled : null
              }`}
            >
              {"<"}
            </Link>
          </li>
          {visiblePageNumbers.map((number) => {
            const pageListClass = `${styles.pageList} ${
              currentPage === number ? styles.active : null
            }`;
            return (
              <>
                <li key={number} className={pageListClass}>
                  <Link
                    href="#"
                    onClick={(event) => handleClick(event, number)}
                  >
                    {number}
                  </Link>
                </li>
              </>
            );
          })}
          <li>
            <Link
              href="#"
              onClick={(event) => handleClick(event, currentPage + 1)}
              className={`${styles.pageLink} ${
                currentPage === maxPageNum ? styles.disabled : null
              }`}
            >
              {">"}
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={(event) => goToLastPage(event)}
              className={`${styles.pageLink} ${
                currentPage === maxPageNum ? styles.disabled : null
              }`}
            >
              {">>"}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
