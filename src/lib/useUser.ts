import { useWallet } from "@solana/wallet-adapter-react";
import useStore from "./store";

const useUser = () => {
  const { publicKey } = useWallet();
  const { userName } = useStore();

  return publicKey?.toString() || userName;
};

export default useUser;
