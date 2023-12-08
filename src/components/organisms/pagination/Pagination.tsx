import React from "react";
import usePagination from "@/hooks/pagination/usePagination/usePagination";
import styles from "./Pagination.module.scss";
import PageLink from "@/components/atoms/pageLink/PageLink";
import PageList from "@/components/molecules/pageList/PageList";

function Pagination({
  currentPage,
  setCurrentPage,
  setIsCheckedAll,
  totalContents,
}: IPaginationProps) {
  const {
    handleClick,
    goToFirstPage,
    goToLastPage,
    visiblePageNumbers,
    maxPageNum,
  } = usePagination({
    currentPage,
    setCurrentPage,
    setIsCheckedAll,
    totalContents,
  });

  return (
    <nav className={styles.container}>
      <ul className={styles.pagination}>
        <li>
          <PageLink
            onClick={(event) => goToFirstPage(event)}
            disabled={currentPage === 1}
            symbol={"<<"}
          />
        </li>
        <li>
          <PageLink
            onClick={(event) => handleClick(event, currentPage - 1)}
            disabled={currentPage === 1}
            symbol={"<"}
          />
        </li>
        <PageList
          numbers={visiblePageNumbers}
          currentPage={currentPage}
          handleClick={handleClick}
        />
        <li>
          <PageLink
            onClick={(event) => handleClick(event, currentPage + 1)}
            disabled={currentPage === maxPageNum}
            symbol={">"}
          />
        </li>
        <li>
          <PageLink
            onClick={(event) => goToLastPage(event)}
            disabled={currentPage === maxPageNum}
            symbol={">>"}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
