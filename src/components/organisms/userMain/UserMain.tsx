"use client";

import UserImage from "@/components/atoms/userImage/UserImage";
import styles from "./UserMain.module.scss";
import UserName from "@/components/atoms/userName/UserName";
import UserContentsContainer from "../userContentsContainer/UserContentsContainer";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
import useDivideContent from "@/hooks/pagination/useDivideContent/useDivideContent";

function UserMain(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isCheckedAll, setIsCheckedAll] = useState<number[]>([]);
  const contentsPerPage = 6;

  const { currentContents } = useDivideContent({
    contentsPerPage,
    currentPage,
    setCurrentPage,
  });

  const content = {
    id: 1,
    userName: "김범수",
    title: "Next.Js 13",
    date: "2023-10-30",
    content: "",
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.userImageContainer}>
          <div className={styles.userImageAndName}>
            <UserImage type="userPage" />
            <div className={styles.userNameContainer}>
              <UserName content={content} />
            </div>
          </div>
        </div>
        <div className={styles.userContentsContainer}>
          <UserContentsContainer
            currentContents={currentContents}
            isCheckedAll={isCheckedAll}
            setIsCheckedAll={setIsCheckedAll}
          />
        </div>
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} setIsCheckedAll={setIsCheckedAll}/>
    </>
  );
}

export default UserMain;
