import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useStore from "@/lib/store";
import useUser from "@/lib/useUser";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { FC } from "react";
import { Navigate } from "react-router-dom";

const LoginPage: FC = () => {
  const userName = useUser();
  const { setUserName } = useStore();

  if (userName) {
    return <Navigate to="/userspace/play" />;
  }

  const handleContinueAsGuest = () => {
    setUserName("Guest");
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Nav />
      <div className="flex flex-col grow items-center justify-center p-4">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Login to continue</CardTitle>
            <CardDescription>
              Just click the button below to login with your Solana wallet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 items-stretch">
              <WalletMultiButton />
              <Button
                variant="secondary"
                className="h-30"
                onClick={handleContinueAsGuest}
              >
                Continue as a guest
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
