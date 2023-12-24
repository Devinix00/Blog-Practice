import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUseUserNickNameStore {
  userNickName: string | null;
  setUserNickName: (userNickName: string | null) => void;
}

const useUserNickNameStore = create(
  persist<IUseUserNickNameStore>(
    (set, _get) => ({
      userNickName: null,
      setUserNickName: (userNickName: string | null) =>
        set(() => ({ userNickName: userNickName })),
    }),
    {
      name: "userNickNameStorage",
    }
  )
);

export default useUserNickNameStore;
