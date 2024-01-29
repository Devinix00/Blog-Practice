interface IUseDivideContent {
  currentContents: IPost[];
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  handlePaginate: (pageNumber: number) => void;
  contentsPerPage: number;
}

interface IProps {
  contentsPerPage: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  posts?: IPost[];
}

function useDivideContent({
  contentsPerPage,
  currentPage,
  setCurrentPage,
  posts,
}: IProps): IUseDivideContent {
  const indexOfLastContent = currentPage * contentsPerPage;
  const indexOfFirstContent = indexOfLastContent - contentsPerPage;
  const currentContents: IPost[] = posts
    ? [...posts].slice(indexOfFirstContent, indexOfLastContent)
    : [];

  const handlePaginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return {
    currentContents,
    currentPage,
    setCurrentPage,
    handlePaginate,
    contentsPerPage,
  };
}

export default useDivideContent;
