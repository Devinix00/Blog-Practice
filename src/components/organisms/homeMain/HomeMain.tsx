"use client";

import React, { useState } from "react";
import ContentContainer from "../contentContainer/ContentContainer";
import styles from "./HomeMain.module.scss";
import Pagination from "@/components/organisms/pagination/Pagination";
import useDivideContent from "@/hooks/pagination/useDivideContent/useDivideContent";

function HomeMain(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const contentsPerPage = 3;
  const { currentContents } = useDivideContent({
    contentsPerPage,
    currentPage,
    setCurrentPage,
  });

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

export default HomeMain;
