import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Store = {
  account?: string;
  userName?: string;
  login: (account: string, userName: string) => void;
  logout: () => void;
};

const useStore = create(
  persist<Store>(
    (set) => ({
      userName: undefined,
      account: undefined,
      login: (account, userName) => set(() => ({ userName, account })),
      logout: () => set(() => ({ userName: undefined, account: undefined })),
    }),
    {
      name: "solana-chess-storage", // unique name for storage
      storage: createJSONStorage(() => localStorage), // (optional) default is localStorage
    }
  )
);

export default useStore;
