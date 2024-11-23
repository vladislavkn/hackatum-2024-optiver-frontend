import { FC } from "react";
import SuggestedGameCard from "./SuggestedGameCard";
import { SuggestedGame } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

export type SuggestedGamesBoardProps = {
  suggestedGames: SuggestedGame[];
};

const SuggestedGamesBoard: FC<SuggestedGamesBoardProps> = ({
  suggestedGames,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
