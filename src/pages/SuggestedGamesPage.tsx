import Nav from "@/components/Nav";
import SuggestedGamesBoard from "@/components/SuggestedGamesBoard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import getSuggestedGame from "@/lib/api";
import useStore from "@/lib/store";
import { SuggestedGame } from "@/types";
import { FC, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = Array.from({ length: 15 }, () => getSuggestedGame());

const SuggestedGamesPage: FC = () => {
  const { userName } = useStore();
  const navigate = useNavigate();

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

  const handleGameClick = (game: SuggestedGame) => {
    navigate(`/userspace/game?competitor=${game.name}&bet=${game.betAmount}`);
  };

  const handleAddSuggestedGame = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const bet = formData.get("bet") as string;
    setSuggestedGames((currState) => {
      return [
        {
          betAmount: Number(bet),
          name: userName!,
          id: Date.now(),
          currency: "SOL",
        },
        ...currState,
      ];
    });
  };

  return (
    <div>
      <Nav />
      <main className="max-w-7xl mx-auto py-8 px-4">
        <form
          className="flex w-full mb-8  items-stretch justify-start"
          onSubmit={handleAddSuggestedGame}
        >
          <p className="font-mono leading-9 mr-1">0.</p>
          <Input
            name="bet"
            type="number"
            placeholder="Your bet"
            className="appearance-none outline-none bg-transparent max-w-32 font-mono mr-2"
            max={99}
            min={0}
          />
          <p className="text-xl leading-9 mr-4 font-mono">SOL</p>
          <div className="grow sm:hidden"></div>
          <Button type="submit">Suggest a game</Button>
        </form>
        <h1 className="text-3xl font-bold mb-4">Active game suggestions</h1>
        <SuggestedGamesBoard
          onGameClick={handleGameClick}
          suggestedGames={suggestedGames}
        />
      </main>
    </div>
  );
};

export default SuggestedGamesPage;
