"use client";

import styles from "./UserMain.module.scss";
import UserContentsContainer from "../userContentsContainer/UserContentsContainer";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
import useDivideContent from "@/hooks/pagination/useDivideContent/useDivideContent";
import UserImgName from "@/components/molecules/userImgName/UserImgName";
import useUserIdStore from "@/stores/useUserIdStore/useUserIdStore";
import useGetMyPostsQuery from "@/services/userPage/queries/useUserPageQuery";

function UserMain(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const contentsPerPage = 6;
  const [isCheckedAll, setIsCheckedAll] = useState<number[]>([]);
  const { userId } = useUserIdStore();
  const { posts } = useGetMyPostsQuery(userId);

  const { currentContents } = useDivideContent({
    contentsPerPage,
    currentPage,
    setCurrentPage,
    posts,
  });

  return (
    <>
      <div className={styles.container}>
        <UserImgName type="userPage" />
        <div className={styles.userContentsContainer}>
          <UserContentsContainer
            currentContents={currentContents}
            isCheckedAll={isCheckedAll}
            setIsCheckedAll={setIsCheckedAll}
          />
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalContents={posts?.length}
        setIsCheckedAll={setIsCheckedAll}
      />
    </>
  );
}

export default UserMain;
