import React from "react";

import styles from "./PageList.module.scss";
import PageNumber from "@/components/atoms/pageNumber/PageNumber";

interface IPageListProps {
  numbers: number[];
  currentPage: number;
  handleClick: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    number: number
  ) => void;
}

function PageList({ numbers, currentPage, handleClick }: IPageListProps) {
  return (
    <div className={styles.container}>
      {numbers.map((number) => {
        return (
          <div className={styles.pageNumber} key={number}>
            <PageNumber
              key={number}
              number={number}
              isActive={number === currentPage}
              onClick={(event) => handleClick(event, number)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PageList;
