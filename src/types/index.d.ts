interface IContent {
  id: number;
  userName: string;
  date: string;
}

interface IPaginationProps {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}
