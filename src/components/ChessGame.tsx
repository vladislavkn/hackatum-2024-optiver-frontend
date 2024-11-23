import { FC, useState } from "react";
import { Chess, ShortMove, Square } from "chess.js";
import { Chessboard } from "react-chessboard";

export type ChessGameProps = {
  onGameOver: (winner: "b" | "w" | "d" | "s") => void;
};

const ChessGame: FC<ChessGameProps> = ({ onGameOver }) => {
  const [game, setGame] = useState(new Chess());

  function makeAMove(move: ShortMove | string) {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.game_over()) {
      handleGameOver();
      return;
    }
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeAMove(possibleMoves[randomIndex]);
  }

  function handleGameOver() {
    if (!game.game_over()) return;
    if (game.in_checkmate()) {
      onGameOver(game.turn() === "w" ? "b" : "w");
    } else if (game.in_draw()) {
      onGameOver("d");
    } else if (game.in_stalemate()) {
      console.log("s");
    }
  }

  function onDrop(sourceSquare: Square, targetSquare: Square) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) return false;
    setTimeout(makeRandomMove, 200);
    return true;
  }

  return <Chessboard position={game.fen()} onPieceDrop={onDrop} />;
};

export default ChessGame;
