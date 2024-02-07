"use client";

import PostManagement from "@/components/molecules/postManagement/PostManagement";
import styles from "./UserContentsContainer.module.scss";
import UserContent from "@/components/molecules/userContent/UserContent";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AllCheckbox from "@/components/atoms/allCheckbox/AllCheckbox";
import useCheckAll from "@/hooks/useCheckAll/useCheckAll";
import { Dispatch, SetStateAction } from "react";
import useDeletePost from "@/hooks/useDeletePost/useDeletePost";

interface IProps {
  posts: IPost[] | undefined;
  currentContents: IPost[];
  isCheckedAll: number[];
  setIsCheckedAll: React.Dispatch<React.SetStateAction<number[]>>;
  setPosts: Dispatch<SetStateAction<IPost[] | undefined>>;
}

function UserContentsContainer({
  posts,
  isCheckedAll,
  setIsCheckedAll,
  currentContents,
  setPosts,
}: IProps): JSX.Element {
  const { handleAllCheck, handleSingleCheck } = useCheckAll({
    isCheckedAll,
    setIsCheckedAll,
    currentContents,
  });

  const { handleDeletePost } = useDeletePost({ posts, setPosts });

  return (
    <>
      <div className={styles.container}>
        <PostManagement />
        <div className={styles.allCheckboxContainer}>
          <AllCheckbox
            checked={
              isCheckedAll.length === currentContents.length ? true : false
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleAllCheck(e.target.checked)
            }
          />
          <div className={styles.text}>전체 선택</div>
        </div>
        <div className={styles.userContents}>
          {currentContents?.map((post: IPost) => (
            <UserContent
              key={post.id}
              posts={posts}
              post={post}
              setPosts={setPosts}
              checked={isCheckedAll.includes(Number(post.id)) ? true : false}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSingleCheck(e.target.checked, Number(post.id))
              }
            />
          ))}
        </div>
        <Button
          variant="contained"
          startIcon={<DeleteIcon />}
          className={styles.deleteButton}
          onClick={() => {
            handleDeletePost(isCheckedAll);
          }}
        >
          삭제
        </Button>
      </div>
    </>
  );
}

export default UserContentsContainer;
