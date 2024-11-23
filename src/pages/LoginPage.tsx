import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { FC, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Nav />
      <div className="flex flex-col grow items-center justify-center p-4">
        <Card className="max-w-xs">
          <CardHeader>
            <CardTitle>Login to continue</CardTitle>
            <CardDescription>
              If you don't have an account at Solana chess yet, it will be
              created
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 items-stretch"
            >
              <Input placeholder="Your name in Solana Chess" />
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
