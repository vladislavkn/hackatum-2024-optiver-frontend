import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FC } from "react";
import CountUpAnimation from "./ui/CountUpAnimation";
import { SuggestedGame } from "@/types";

export type SuggestedGameCardProps = {
  suggestedGame: SuggestedGame;
};

const getInitials = (name: string) => name.split(" ").map((word) => word[0]);

const SuggestedGameCard: FC<SuggestedGameCardProps> = ({
  suggestedGame: { avatarUrl, betAmount, currency, name },
}) => {
  return (
    <div className="bg-zinc-100 rounded-lg flex p-4 gap-4 cursor-pointer">
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
      </div>
    </div>
  );
};

export default SuggestedGameCard;
