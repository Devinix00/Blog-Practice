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

interface IPost {
  content: string;
  createdAt: string;
  id: number;
  mainImg: string;
  title: string;
  updatedAt: string;
  userId: number;
}
