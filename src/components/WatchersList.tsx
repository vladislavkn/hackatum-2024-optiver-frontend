import { FC, useState } from "react";
import WatcherCard, { WatcherCardProps } from "./WatcherCard";
import { createWatcher } from "@/lib/api";

const defaultWatchers: WatcherCardProps[] = Array.from({ length: 10 }).map(() =>
  createWatcher()
);

const WatchersList: FC = () => {
  const [watchers] = useState<WatcherCardProps[]>(defaultWatchers);
  return (
    <div>
      <h6 className="mb-2 text-sm">Watchers</h6>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3">
        {watchers.map((watcher, i) => (
          <WatcherCard key={i} name={watcher.name} bet={watcher.bet} />
        ))}
      </div>
    </div>
  );
};

export default WatchersList;
