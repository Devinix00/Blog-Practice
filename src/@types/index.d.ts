interface IContent {
  id: number;
  userName: string;
  title: string;
  date: string;
  content: string;
}

interface IPaginationProps {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  setIsCheckedAll?: React.Dispatch<React.SetStateAction<number[]>>;
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
