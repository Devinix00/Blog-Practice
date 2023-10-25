import Link from "next/link";
import styles from "./PageNumber.module.scss";
import React from "react";

interface IPageNumberProps {
  number: number;
  isActive: boolean;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function PageNumber({ number, isActive, onClick }: IPageNumberProps) {
  return (
    <Link
      href="#"
      onClick={onClick}
      className={`${styles.pageNumber} ${isActive ? styles.active : null}`}
    >
      {number}
    </Link>
  );
}

export default PageNumber;
