import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FC, useEffect, useState } from "react";
import CountUpAnimation from "./ui/CountUpAnimation";
import { SuggestedGame } from "@/types";

export type SuggestedGameCardProps = {
  suggestedGame: SuggestedGame;
  onClick?: (game: SuggestedGame) => void;
  displayViewers?: boolean;
};

const getInitials = (name: string) => name.split(" ").map((word) => word[0]);

const SuggestedGameCard: FC<SuggestedGameCardProps> = ({
  suggestedGame,
  onClick,
  displayViewers,
}) => {
  const { avatarUrl, betAmount, currency, name } = suggestedGame;
  const [viewers, setVirewers] = useState(Math.floor(Math.random() * 25));

  useEffect(() => {
    const updateRate = 500 + Math.floor(Math.random() * 5000);
    const interval = setInterval(() => {
      setVirewers((curr) =>
        Math.max(0, curr + 5 - Math.floor(Math.random() * 10))
      );
    }, updateRate);
    return () => clearInterval(interval);
  });

  return (
    <div
      onClick={() => onClick?.(suggestedGame)}
      className="border hover:bg-zinc-200 transition rounded-lg flex p-4 gap-4 cursor-pointer"
    >
      <Avatar className="w-12 h-12">
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>{getInitials(name)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-xs text-gray-600">{name} bets</p>
        <div className="flex gap-1">
          <div className="text-3xl tabular-nums">
            0.
            <CountUpAnimation number={betAmount} className="" />
          </div>
          <span className="text-sm uppercase text-gray-600">{currency}</span>
        </div>
        {displayViewers && <div>{viewers} watchers</div>}
      </div>
    </div>
  );
};

export default SuggestedGameCard;
