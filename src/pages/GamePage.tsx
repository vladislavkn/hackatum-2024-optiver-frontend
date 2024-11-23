import ChessGame from "@/components/ChessGame";
import Nav from "@/components/Nav";
import { FC } from "react";

const GamePage: FC = () => {
  return (
    <div>
      <Nav />
      <main className="max-w-7xl mx-auto py-8 px-4">
        <ChessGame onGameOver={alert} />
      </main>
    </div>
  );
};

export default GamePage;
