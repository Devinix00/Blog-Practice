"use client";

import React, { useState } from "react";
import ContentContainer from "../contentContainer/ContentContainer";
import styles from "./MainContent.module.scss";
import Pagination from "@/components/molecules/pagination/Pagination";
import useDivideContent from "@/hooks/pagination/useDivideContent/useDivideContent";

function MainContent(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { currentContents } = useDivideContent({ currentPage, setCurrentPage });
  return (
    <>
      <div className={styles.container}>
        <div className={styles.latestContentText}>최신 글</div>
        {currentContents?.map((content: IContent) => (
          <ContentContainer key={content.id} content={content} />
        ))}
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
}

export default MainContent;
