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

interface ISignUpForm {
  id: string;
  password: string;
  createdAt: string;
}
