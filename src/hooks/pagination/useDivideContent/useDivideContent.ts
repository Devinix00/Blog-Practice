interface IUseDivideContent {
  currentContents: IContent[];
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  handlePaginate: (pageNumber: number) => void;
  totalContents: number;
  contentsPerPage: number;
}

const allContents = [
  { id: 1, userName: "김범수", date: "2023-10-24 00:00" },
  { id: 2, userName: "김범수", date: "2023-10-24 00:01" },
  { id: 3, userName: "김범수", date: "2023-10-24 00:02" },
  { id: 4, userName: "김범수", date: "2023-10-24 00:03" },
  { id: 5, userName: "김범수", date: "2023-10-24 00:04" },
  { id: 6, userName: "김범수", date: "2023-10-24 00:05" },
  { id: 7, userName: "김범수", date: "2023-10-24 00:06" },
  { id: 8, userName: "김범수", date: "2023-10-24 00:07" },
  { id: 9, userName: "김범수", date: "2023-10-24 00:08" },
  { id: 10, userName: "김범수", date: "2023-10-24 00:09" },
  { id: 11, userName: "김범수", date: "2023-10-24 00:10" },
  { id: 12, userName: "김범수", date: "2023-10-24 00:11" },
  { id: 13, userName: "김범수", date: "2023-10-24 00:12" },
  { id: 14, userName: "김범수", date: "2023-10-24 00:13" },
  { id: 15, userName: "김범수", date: "2023-10-24 00:14" },
  { id: 16, userName: "김범수", date: "2023-10-24 00:15" },
  { id: 17, userName: "김범수", date: "2023-10-24 00:16" },
  { id: 18, userName: "김범수", date: "2023-10-24 00:17" },
  { id: 19, userName: "김범수", date: "2023-10-24 00:18" },
  { id: 20, userName: "김범수", date: "2023-10-24 00:19" },
  { id: 21, userName: "김범수", date: "2023-10-24 00:20" },
  { id: 22, userName: "김범수", date: "2023-10-24 00:21" },
  { id: 23, userName: "김범수", date: "2023-10-24 00:22" },
  { id: 24, userName: "김범수", date: "2023-10-24 00:23" },
  { id: 25, userName: "김범수", date: "2023-10-24 00:24" },
  { id: 26, userName: "김범수", date: "2023-10-24 00:25" },
  { id: 27, userName: "김범수", date: "2023-10-24 00:26" },
  { id: 28, userName: "김범수", date: "2023-10-24 00:27" },
  { id: 29, userName: "김범수", date: "2023-10-24 00:28" },
  { id: 30, userName: "김범수", date: "2023-10-24 00:29" },
  { id: 31, userName: "김범수", date: "2023-10-24 00:30" },
  { id: 32, userName: "김범수", date: "2023-10-24 00:31" },
  { id: 33, userName: "김범수", date: "2023-10-24 00:32" },
  { id: 34, userName: "김범수", date: "2023-10-24 00:33" },
  { id: 35, userName: "김범수", date: "2023-10-24 00:34" },
  { id: 36, userName: "김범수", date: "2023-10-24 00:35" },
  { id: 37, userName: "김범수", date: "2023-10-24 00:36" },
  // 데이터 예시...
];

const contentsPerPage = 3;

function useDivideContent({
  currentPage,
  setCurrentPage,
}: any): IUseDivideContent {
  const indexOfLastContent = currentPage * contentsPerPage;
  const indexOfFirstContent = indexOfLastContent - contentsPerPage;

  const currentContents: IContent[] = [...allContents]
    .reverse()
    .slice(indexOfFirstContent, indexOfLastContent);

  const handlePaginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalContents = allContents.length;

  return {
    currentContents,
    currentPage,
    setCurrentPage,
    handlePaginate,
    totalContents,
    contentsPerPage,
  };
}

export default useDivideContent;
