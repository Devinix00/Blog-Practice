"use client";

import UserImage from "@/components/atoms/userImage/UserImage";
import styles from "./UserMain.module.scss";
import UserName from "@/components/atoms/userName/UserName";
import UserContentsContainer from "../userContentsContainer/UserContentsContainer";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
import useDivideContent from "@/hooks/pagination/useDivideContent/useDivideContent";
import UserImgName from "@/components/molecules/userImgName/UserImgName";

function UserMain(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isCheckedAll, setIsCheckedAll] = useState<number[]>([]);
  const contentsPerPage = 6;

  const { currentContents } = useDivideContent({
    contentsPerPage,
    currentPage,
    setCurrentPage,
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
        setIsCheckedAll={setIsCheckedAll}
      />
    </>
  );
}

export default UserMain;
