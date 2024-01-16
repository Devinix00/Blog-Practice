import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUseIsLoggedinStore {
  isLoggedIn: boolean;
  setLoggedInTrue: () => void;
  setLoggedInFalse: () => void;
}

const useIsLoggedinStore = create(
  persist<IUseIsLoggedinStore>(
    (set, _get) => ({
      isLoggedIn: false,
      setLoggedInTrue: () => set(() => ({ isLoggedIn: true })),
      setLoggedInFalse: () => set(() => ({ isLoggedIn: false })),
    }),
    {
      name: "isLoggedInStorage",
    }
  )
);

export default useIsLoggedinStore;
