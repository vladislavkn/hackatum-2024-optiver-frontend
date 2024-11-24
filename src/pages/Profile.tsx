import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import useUser from "@/lib/useUser";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { Coins, Share2 } from "lucide-react";
import { FC } from "react";

const Profile: FC = () => {
  const userName = useUser();

  return (
    <div>
      <Nav />
      <main className="max-w-xs mx-auto pt-20 pb-8 overflow-hidden">
        <p className="text-sm text-gray-500">Hi at Chess Chain,</p>
        <h1 className="text-3xl font-bold mb-8 break-all">
          {userName!.toString()}
        </h1>

        <div className="flex gap-4 justify-between mb-8">
          <div>
            <p className="text-sm">Your place</p>
            <p className="text-lg font-bold text-yellow-500">101th</p>
          </div>
          <div>
            <p className="text-sm">Your results</p>
            <p className="text-lg font-bold text-green-500">+0.01 SOL</p>
          </div>
          <div>
            <p className="text-sm">Your winrate</p>
            <p className="text-lg font-bold text-green-500">65%</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm">
            You can withdraw <b>0.01</b> SOL
          </p>
          <Button size="sm" variant="secondary">
            <Coins />
            Withdraw
          </Button>
        </div>
        <div className="flex justify-between items-center gap-8 mb-4">
          <p className="text-sm">Share your cool results</p>
          <Button size="sm" variant="secondary">
            <Share2 />
            Share
          </Button>
        </div>
        {userName === "Guest" ? (
          <div className="flex justify-between items-center gap-8 ">
            <p className="text-sm">Connect wallet</p>
            <WalletMultiButton />
          </div>
        ) : (
          <WalletDisconnectButton />
        )}
      </main>
    </div>
  );
};

export default Profile;
