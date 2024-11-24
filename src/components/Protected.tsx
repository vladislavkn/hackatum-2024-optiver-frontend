import useUser from "@/lib/useUser";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected: FC = () => {
  const userName = useUser();
  return userName ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
