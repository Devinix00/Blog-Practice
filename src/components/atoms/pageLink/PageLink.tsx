import Link from "next/link";
import styles from "./PageLink.module.scss";
import React from "react";

interface IPageLinkProps {
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  disabled: boolean;
  symbol: string;
}

function PageLink({ onClick, disabled, symbol }: IPageLinkProps) {
  return (
    <Link
      href="#"
      onClick={onClick}
      className={`${styles.pageLink} ${disabled ? styles.disabled : null}`}
    >
      {symbol}
    </Link>
  );
}

export default PageLink;
