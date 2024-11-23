import Nav from "@/components/Nav";
import SuggestedGamesBoard from "@/components/SuggestedGamesBoard";
import { Button } from "@/components/ui/button";

import { FC } from "react";

const SuggestedGamesPage: FC = () => {
  return (
    <div>
      <Nav />

      <main className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex w-full sm:w-auto">
          <label className="bg-zinc-100 rounded-lg p-3 mb-8 flex gap-4 items-stretch w-full sm:w-auto">
            <input
              type="number"
              placeholder="Make a bet..."
              className="appearance-none outline-none bg-transparent grow"
            />
            <select className="appearance-none bg-transparent outline-none">
              <option value="ETH">ETH</option>
              <option value="BTC">BTC</option>
            </select>
            <Button size="sm">Suggest a bet</Button>
          </label>
        </div>
        <h1 className="text-3xl font-bold mb-4">Active game suggestions</h1>
        <SuggestedGamesBoard />
      </main>
    </div>
  );
};

export default SuggestedGamesPage;
