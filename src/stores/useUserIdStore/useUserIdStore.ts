import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUseUserIdStore {
  userId: number | null;
  setUserId: (userId: number | null) => void;
}

const useUserIdStore = create(
  persist<IUseUserIdStore>(
    (set, _get) => ({
      userId: null,
      setUserId: (userId: number | null) => set(() => ({ userId: userId })),
    }),
    {
      name: "userIdStorage",
    }
  )
);

export default useUserIdStore;
