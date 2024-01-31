import UserMain from "@/components/organisms/userMain/UserMain";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  posts: IPost[] | undefined;
  setPosts: Dispatch<SetStateAction<IPost[] | undefined>>;
}

function UserTemplate({ posts ,setPosts}: IProps): JSX.Element {
  return (
    <>
      <UserMain posts={posts} setPosts={setPosts}/>
    </>
  );
}

export default UserTemplate;
