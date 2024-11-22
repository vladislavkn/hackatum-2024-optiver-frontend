import { FC, useEffect, useState } from "react";
import SuggestedGameCard from "./SuggestedGameCard";
import getSuggestedGame from "@/lib/api";
import { SuggestedGame } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

const initialState = Array.from({ length: 15 }, () => getSuggestedGame());

const SuggestedGamesBoard: FC = () => {
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <AnimatePresence>
        {suggestedGames.map((game) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <SuggestedGameCard suggestedGame={game} key={game.id} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SuggestedGamesBoard;
