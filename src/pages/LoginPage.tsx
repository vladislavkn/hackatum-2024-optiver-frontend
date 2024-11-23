import Nav from "@/components/Nav";
// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import useStore from "@/lib/store";
// import { useSDK } from "@metamask/sdk-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { Navigate } from "react-router-dom";
// import { toast } from "sonner";

const LoginPage: FC = () => {
  const { publicKey } = useWallet();

  //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.target as HTMLFormElement);
  //     const userName = formData.get("userName") as string;
  //     try {
  //       const accounts = await sdk.connect();
  //       console.log({ account });
  //       if (!account || account.length === 0) throw Error("No account found");
  //       login(accounts[0], userName);
  //     } catch (err) {
  //       console.error("Failed to connect to MetaMask", err);
  //       toast.error("Failed to connect to MetaMask");
  //     }
  //   };

  if (publicKey) {
    return <Navigate to="/userspace/play" />;
  }

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
            <div className="flex flex-col gap-3 items-stretch">
              {/* <Input
                required
                name="userName"
                placeholder="Your name in Chess Chain"
              /> */}
              <WalletMultiButton />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
