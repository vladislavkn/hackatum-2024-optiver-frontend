import Nav from "@/components/Nav";
import SuggestedGamesBoard from "@/components/SuggestedGamesBoard";
import getSuggestedGame from "@/lib/api";
import useUser from "@/lib/useUser";

import { SuggestedGame } from "@/types";
import { FC, useEffect, useState } from "react";

const initialState = Array.from({ length: 15 }, () => getSuggestedGame());

const WatchPage: FC = () => {
  const userName = useUser();

  const [suggestedGames, setSuggestedGames] = useState<SuggestedGame[]>(
    userName ? initialState : []
  );
  useEffect(() => {
    if (!userName) return;
    let timeout: ReturnType<typeof setTimeout>;

    const updateGames = () => {
      setSuggestedGames((currState) => {
        const randomIndex = Math.floor(Math.random() * currState.length);
        if (currState.length > 30) {
          currState.splice(randomIndex, 1);
        } else {
          currState.splice(randomIndex, 0, getSuggestedGame());
        }

        return [...currState];
      });
      timeout = setTimeout(updateGames, Math.floor(Math.random() * 5000));
    };
    timeout = setTimeout(updateGames, Math.floor(Math.random() * 5000));
    return () => {
      clearTimeout(timeout);
    };
  });

  const handleGameClick = () => {};

  return (
    <div>
      <Nav />
      <main className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Select a game to watch</h1>
        <SuggestedGamesBoard
          onGameClick={handleGameClick}
          suggestedGames={suggestedGames}
          displayViewers
        />
      </main>
    </div>
  );
};

export default WatchPage;
