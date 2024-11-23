import { FC } from "react";

export type WatcherCardProps = {
  name: string;
  bet: number;
};

const WatcherCard: FC<WatcherCardProps> = ({ name, bet }) => (
  <div className="border rounded-xl p-2">
    <p className="text-xs">{name}</p>
    <p className="font-bold">{bet} SOL</p>
  </div>
);

export default WatcherCard;
