import { useRouter } from "next/navigation";

interface IUseRenderHeader {
  accessToken: string | null;
  handleSignOut: () => void;
}

function useRenderHeader(): IUseRenderHeader {
  const router = useRouter();
  const accessToken = localStorage.getItem("accessToken");

  const handleSignOut = (): void => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃 되었습니다.");
    } else {
      alert("취소합니다.");
      return;
    }
    localStorage.removeItem("accessToken");
    router.refresh();
  };
  
  return { accessToken, handleSignOut };
}

export default useRenderHeader;
