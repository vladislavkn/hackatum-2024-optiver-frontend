import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useStore from "@/lib/store";
import { ArrowRight } from "lucide-react";
import { FC, FormEvent } from "react";
import { Navigate } from "react-router-dom";

const LoginPage: FC = () => {
  const { login, userName } = useStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const userName = formData.get("userName") as string;
    login(userName);
  };

  if (userName) {
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
              If you don't have an account at Chess chain yet, it will be
              created
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 items-stretch"
            >
              <Input name="userName" placeholder="Your name in Chess Chain" />
              <Button size="lg" type="submit">
                Continue in with Google <ArrowRight />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
