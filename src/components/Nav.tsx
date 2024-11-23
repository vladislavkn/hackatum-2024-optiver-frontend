import { FC } from "react";

import { Button } from "./ui/button";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import useStore from "@/lib/store";

const Nav: FC = () => {
  const { userName } = useStore();

  return (
    <nav className="flex px-4 py-2 justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <Link to="/userspace/play">
          <img src={logo} alt="Chess chain" className="h-8" />
        </Link>
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
        <div className="flex items-center gap-4 rounded-lg py-2 px-3">
          <Button variant="link" asChild>
            <Link to="/userspace/profile">👋 {userName}</Link>
          </Button>
          <div>
            <p className="text-xs">Your place</p>
            <p className="text-sm font-bold text-yellow-500">57th</p>
          </div>
          <div>
            <p className="text-xs">Your results</p>
            <p className="text-sm font-bold text-green-500">+0.02 SOL</p>
          </div>
          <div>
            <p className="text-xs">Your winrate</p>
            <p className="text-sm font-bold text-green-500">65%</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
