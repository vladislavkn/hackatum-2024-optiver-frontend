import { FC } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Nav: FC = () => (
  <nav className="flex px-4 py-2 justify-between items-center border-b">
    <Link to="/">
      <img src={logo} alt="Solana Chess" className="h-8" />
    </Link>
    <div className="flex items-center gap-4 rounded-lg py-2 px-3 cursor-pointer transition">
      <div className="flex items-center gap-2 text-sm text-green-500">
        0.02 SOL
      </div>
      <Button variant="outline" className="rounded-full w-8 h-8">
        <Avatar>
          <AvatarImage src="https://api.dicebear.com/9.x/micah/svg" />
        </Avatar>
      </Button>
    </div>
  </nav>
);

export default Nav;
