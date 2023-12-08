"use client";

import React, { useState } from "react";
import ContentContainer from "../contentContainer/ContentContainer";
import styles from "./HomeMain.module.scss";
import Pagination from "@/components/organisms/pagination/Pagination";
import useDivideContent from "@/hooks/pagination/useDivideContent/useDivideContent";

interface IProps {
  posts: IPost[];
}

function HomeMain({ posts }: IProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const contentsPerPage = 3;
  const { currentContents } = useDivideContent({
    contentsPerPage,
    currentPage,
    setCurrentPage,
    posts,
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.latestContentText}>최신 글</div>
        {currentContents?.map((post: IPost) => (
          <ContentContainer key={post.id} post={post} />
        ))}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalContents={posts.length}
        />
      </div>
    </>
  );
}

export default HomeMain;
