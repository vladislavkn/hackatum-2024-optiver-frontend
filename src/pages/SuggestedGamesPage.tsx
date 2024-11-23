import Nav from "@/components/Nav";
import SuggestedGamesBoard from "@/components/SuggestedGamesBoard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import getSuggestedGame from "@/lib/api";
import { SuggestedGame } from "@/types";
import { FC, FormEvent, useEffect, useState } from "react";

const initialState = Array.from({ length: 15 }, () => getSuggestedGame());

const SuggestedGamesPage: FC = () => {
  const [suggestedGames, setSuggestedGames] =
    useState<SuggestedGame[]>(initialState);
  useEffect(() => {
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
    return () => clearTimeout(timeout);
  });

  const handleAddSuggestedGame = (e: FormEvent) => {
    e.preventDefault();
    // (e.target as HTMLFormElement)
  };

  return (
    <div>
      <Nav />
      <main className="max-w-7xl mx-auto py-8 px-4">
        <form
          className="flex w-full mb-8 gap-2 items-stretch justify-start"
          onSubmit={handleAddSuggestedGame}
        >
          <Input
            name="bet"
            type="number"
            placeholder="Make a bet in SOL"
            className="appearance-none outline-none bg-transparent max-w-xs"
          />
          <Button type="submit">Suggest a game</Button>
        </form>
        <h1 className="text-3xl font-bold mb-4">Active game suggestions</h1>
        <SuggestedGamesBoard suggestedGames={suggestedGames} />
      </main>
    </div>
  );
};

export default SuggestedGamesPage;
