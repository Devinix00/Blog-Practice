import styles from "./UserMain.module.scss";
import UserContentsContainer from "../userContentsContainer/UserContentsContainer";
import Pagination from "../pagination/Pagination";
import { Dispatch, SetStateAction, useState } from "react";
import useDivideContent from "@/hooks/pagination/useDivideContent/useDivideContent";
import UserImgName from "@/components/molecules/userImgName/UserImgName";

interface IProps {
  posts: IPost[] | undefined;
  setPosts: Dispatch<SetStateAction<IPost[] | undefined>>;
}

function UserMain({ posts, setPosts }: IProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const contentsPerPage = 6;
  const [isCheckedAll, setIsCheckedAll] = useState<number[]>([]);

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
            posts={posts}
            currentContents={currentContents}
            isCheckedAll={isCheckedAll}
            setIsCheckedAll={setIsCheckedAll}
            setPosts={setPosts}
          />
        </div>
      </div>
      <Pagination
        contentsPerPage={contentsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalContents={posts?.length}
        setIsCheckedAll={setIsCheckedAll}
      />
    </>
  );
}

export default UserMain;
