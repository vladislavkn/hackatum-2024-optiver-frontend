import { useWallet } from "@solana/wallet-adapter-react";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected: FC = () => {
  const { publicKey } = useWallet();
  return publicKey ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
