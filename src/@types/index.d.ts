interface IPaginationProps {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  setIsCheckedAll?: React.Dispatch<React.SetStateAction<number[]>>;
  totalContents?: number;
}

interface ISignUpValues {
  email: string;
  password: string;
  nickName: string;
  confirmPassword?: string;
}

interface ISignInValues {
  email: string;
  password: string;
}

interface ICreatePostValues {
  userId: number | null;
  title: string;
  content: string;
  mainImg?: string;
}

interface IUserInfoResponse {
  id: number;
  email: string;
  nickName: string;
  userImg: string | null;
  createdAt: string;
  updatedAt: string;
}

interface IPost {
  id: number;
  userId: number;
  userInfoResponse: IUserInfoResponse;
  title: string;
  content: string;
  mainImg: string | null;
  createdAt: string;
  updatedAt: string;
}

interface IComment {
  postId: number;
  replyId?: number;
  userId: number | null;
  content: string;
}
