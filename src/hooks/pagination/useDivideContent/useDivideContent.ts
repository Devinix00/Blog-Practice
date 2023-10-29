interface IUseDivideContent {
  currentContents: IContent[];
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  handlePaginate: (pageNumber: number) => void;
  totalContents: number;
  contentsPerPage: number;
}

const createContents = (count: number, userName: string): IContent[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    userName,
    title: "",
    content: "",
    date: "",
  }));
};

const allContents: IContent[] = createContents(100, "김범수");

allContents.forEach((content, index) => {
  const date = new Date("2023-10-01");
  date.setDate(date.getDate() + index);
  content.date = date.toISOString().slice(0, 10);
  content.title = `Next.Js`;
  content.content = `기본적으로 SSR 위주의 풀스택 기반 프레임워크를 주력으로 성장하고 있으며, 풀스택 프레임워크답게 API 기능 및 서버 컴포넌트를 통한 서버측 기능과, React 컴포넌트를 통한 클라이언트 기능으로 나뉘어 통합 제공하는 프레임워크이다. 현재 node.js 기반의 안정적인 풀스택 프레임워크로 사랑받고 있으며, SSG 방식 또한 제공한다. react 공식 시작하기 문서를 열람할 시, 가장 먼저 이 Next.js 프레임워크를 통한 시작하기가 가장 상단에 표시될 정도로 React의 거의 대표급 프레임워크이다.

  파일 페이지 라우터(기존)과 13부터 안정화된 폴더 방식의 앱 라우터(아래 참조) 두가지 라우팅 방식을 지원하며, 라우팅 규칙이 충돌하지 않는 내에서 두 라우팅 방식을 모두 사용할 수 있다. 또한, 앱 라우터가 완전히 안정화한다 해도, 기존 페이지 라우팅 방식은 지속적으로 관리하기 때문에 차기 개발 시에도 취향이나 정책에 맞게 적절히 사용하면 된다.`;
});

function useDivideContent({
  contentsPerPage = 3,
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
