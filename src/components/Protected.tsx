import useStore from "@/lib/store";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected: FC = () => {
  const { userName } = useStore();
  return userName ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
