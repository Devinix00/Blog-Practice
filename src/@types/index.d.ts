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
  id: string;
  userId: number;
  userInfoResponse: IUserInfoResponse;
  replyResponses: IReplyResponses[];
  likeResponses: ILikeResponses[];
  title: string;
  content: string;
  mainImg: string | null;
  createdAt: string;
  updatedAt: string;
}

interface IComment {
  postId: string;
  originReplyId?: number;
  userId: number | null;
  content: string;
}

interface IReplyResponses {
  content: string;
  createdAt: string;
  id: number;
  originReplyId: number;
  postId: number;
  updatedAt: string;
  userInfoResponse: IUserInfoResponse;
}

interface ILikeResponses {
  createdAt: string;
  id: number;
  postId: number;
  userId: number;
  userInfoResponses: IUserInfoResponse;
}
