import { FC } from "react";

import { Button } from "./ui/button";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import useUser from "@/lib/useUser";

const Nav: FC = () => {
  const userName = useUser();

  return (
    <nav className="flex px-4 py-3 justify-between items-center border-b flex-wrap gap-4">
      <div className="flex items-center gap-2 grow">
        <Link to="/userspace/play">
          <img src={logo} alt="Chess chain" className="h-8" />
        </Link>
        <div className="sm:hidden grow"></div>
        {userName && (
          <>
            <Button variant="link" asChild>
              <Link to="/userspace/watch">Watch</Link>
            </Button>
            <Button variant="link">
              <Link to="/userspace/play">Play</Link>
            </Button>
          </>
        )}
      </div>

      {userName && (
        <div className="flex items-center gap-4 rounded-lg grow sm:grow-0">
          <Button variant="outline" asChild>
            <Link to="/userspace/profile">
              👋 {userName.toString().slice(0, 12) + "..."}
            </Link>
          </Button>
          <div className="grow"></div>
          <div>
            <p className="text-xs hidden sm:block">Your place</p>
            <p className="text-sm font-bold text-yellow-500">57th</p>
          </div>
          <div>
            <p className="text-xs hidden sm:block">Your results</p>
            <p className="text-sm font-bold text-green-500">+0.02 SOL</p>
          </div>
          <div>
            <p className="text-xs hidden sm:block">Your winrate</p>
            <p className="text-sm font-bold text-green-500">65%</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
