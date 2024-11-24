import { create } from "zustand";

type Store = {
  userName?: string;
  setUserName: (userName: string) => void;
};

const useStore = create<Store>((set) => ({
  userName: undefined,
  setUserName: (userName) => set(() => ({ userName })),
}));

export default useStore;
