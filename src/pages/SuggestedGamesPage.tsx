import SuggestedGamesBoard from "@/components/SuggestedGamesBoard";

import { FC } from "react";

const SuggestedGamesPage: FC = () => {
  return (
    <div>
      <main className="max-w-3xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-4">Active game suggestions</h1>
        <SuggestedGamesBoard />
      </main>
    </div>
  );
};

export default SuggestedGamesPage;
