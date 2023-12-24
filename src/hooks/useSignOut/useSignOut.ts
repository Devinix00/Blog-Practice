import useIsLoggedinStore from "@/stores/useIsLoggedinStore/useIsLoggedinStore";
import useUserIdStore from "@/stores/useUserIdStore/useUserIdStore";
import useUserNickNameStore from "@/stores/useUserNickNameStore/useUserNickNameStore";
import { useRouter } from "next/navigation";

interface IUseSignOut {
  handleSignOut: () => void;
}

function useSignOut(): IUseSignOut {
  const router = useRouter();
  const { setUserId } = useUserIdStore();
  const clearUserIdStorage = useUserIdStore.persist?.clearStorage;
  const { setLoggedInFalse } = useIsLoggedinStore();
  const clearIsLoggedInStorage = useIsLoggedinStore.persist?.clearStorage;
  const clearUserNickNameStorage = useUserNickNameStore.persist.clearStorage;

  const handleSignOut = (): void => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃 되었습니다.");
    } else {
      alert("취소합니다.");
      return;
    }
    localStorage.removeItem("accessToken");

    clearUserIdStorage();
    setUserId(null);

    clearIsLoggedInStorage();
    setLoggedInFalse();

    clearUserNickNameStorage();

    router.refresh();
  };
  return { handleSignOut };
}

export default useSignOut;
