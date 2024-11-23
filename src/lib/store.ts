import { create } from "zustand";

type Store = {
  userName?: string;
  login: (userName: string) => void;
};

const useStore = create<Store>()((set) => ({
  userName: undefined,
  login: (userName) => set(() => ({ userName })),
}));

export default useStore;
