import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUseIsLoggedInStore {
  isLoggedIn: boolean;
  setLoggedInTrue: () => void;
  setLoggedInFalse: () => void;
}

const useIsLoggedInStore = create(
  persist<IUseIsLoggedInStore>(
    (set, _get) => ({
      isLoggedIn: false,
      setLoggedInTrue: () => set(() => ({ isLoggedIn: true })),
      setLoggedInFalse: () => set(() => ({ isLoggedIn: false })),
    }),
    {
      name: "isLoggedInStore",
    }
  )
);

export default useIsLoggedInStore;
