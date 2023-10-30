import { useState } from "react";
import useDivideContent from "../useDivideContent/useDivideContent";

interface IUsePagination {
  currentPage: number;
  maxPageNum: number;
  visiblePageNumbers: number[];
  handleClick: (event: React.MouseEvent, number: number) => void;
  goToFirstPage: (event: React.MouseEvent) => void;
  goToLastPage: (event: React.MouseEvent) => void;
  totalContents: number;
}

function usePagination({
  currentPage,
  setCurrentPage,
  setIsCheckedAll,
}: IPaginationProps): IUsePagination {
  const { handlePaginate, totalContents, contentsPerPage } = useDivideContent({
    currentPage,
    setCurrentPage,
  });
  const pageNumbers: number[] = [];
  const maxPageNum = Math.ceil(totalContents / contentsPerPage);

  for (let i = 1; i <= maxPageNum; i++) {
    pageNumbers.push(i);
  }

  const updatePageNumbers = (page: number) => {
    let startPage = page - 4 > 1 ? page - 4 : 1;
    let endPage = startPage + 9 > maxPageNum ? maxPageNum : startPage + 9;

    while (endPage - startPage < 9 && startPage > 1) {
      startPage--;
    }

    return pageNumbers.slice(startPage - 1, endPage);
  };

  const [, setCurrentNumbers] = useState(updatePageNumbers(1));

  const visiblePageNumbers = updatePageNumbers(currentPage);

  const handleClick = (event: React.MouseEvent, number: number): void => {
    event.preventDefault();
    setCurrentPage(number);
    setCurrentNumbers(updatePageNumbers(number));
    handlePaginate(number);
    if (setIsCheckedAll) {
      setIsCheckedAll([]);
    }
  };

  const goToFirstPage = (event: React.MouseEvent): void => {
    event.preventDefault();
    setCurrentPage(1);
    handlePaginate(1);
    if (setIsCheckedAll) {
      setIsCheckedAll([]);
    }
  };

  const goToLastPage = (event: React.MouseEvent): void => {
    event.preventDefault();
    setCurrentPage(maxPageNum);
    handlePaginate(maxPageNum);
    if (setIsCheckedAll) {
      setIsCheckedAll([]);
    }
  };

  return {
    currentPage,
    maxPageNum,
    visiblePageNumbers,
    handleClick,
    goToFirstPage,
    goToLastPage,
    totalContents,
  };
}

export default usePagination;
