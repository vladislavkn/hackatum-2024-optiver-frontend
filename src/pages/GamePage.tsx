import BetChart from "@/components/BetChart";
import ChessGame from "@/components/ChessGame";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WatchersList from "@/components/WatchersList";
import useStore from "@/lib/store";
import { FC } from "react";
import { useSearchParams } from "react-router-dom";

const GamePage: FC = () => {
  const { userName } = useStore();
  const [searchParams] = useSearchParams();
  const competitor = searchParams.get("competitor");
  const bet = searchParams.get("bet");

  return (
    <div>
      <Nav />
      <main className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">
          {userName} vs. {competitor}
        </h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 items-start">
          <div className="border rounded">
            <ChessGame onGameOver={alert} />
          </div>
          <div>
            <div className="grid mb-8 gap-8 grid-cols-3 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <p className="text-sm">Players bet amount</p>
                <p className="text-xl font-bold">{bet} SOL</p>
              </div>
              <div>
                <p className="text-sm">Your bet amount</p>
                <p className="text-xl font-bold">{Number(bet!) / 2} SOL</p>
              </div>
              <div>
                <p className="text-sm">Watchers bet amount</p>
                <p className="text-xl font-bold">1,54 SOL</p>
              </div>
              <div className="col-span-3 sm:col-span-2 md:col-span-3 flex rounded-lg">
                <Input
                  placeholder="Enter your bet"
                  type="number"
                  className="mr-2"
                />
                <Button>Rise your bet</Button>
              </div>
            </div>
            <BetChart />
            <WatchersList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default GamePage;
