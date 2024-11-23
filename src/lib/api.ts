import { WatcherCardProps } from "@/components/WatcherCard";
import { SuggestedGame } from "@/types";

const firstNames = [
  "John",
  "Jane",
  "Bob",
  "Alice",
  "Charlie",
  "David",
  "Bilbo",
  "Frodo",
  "Gandalf",
];
const lastNames = [
  "Doe",
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Miller",
  "Davis",
  "Wilson",
];
const avatars = [
  "https://api.dicebear.com/9.x/pixel-art/svg",
  "https://api.dicebear.com/9.x/micah/svg",
  "https://api.dicebear.com/9.x/lorelei/svg",
];

export const randomChoice = <T>(array: T[]) =>
  array[Math.floor(Math.random() * array.length)];

let counter = 0;
const getSuggestedGame = (): SuggestedGame => ({
  id: counter++,
  name: randomChoice(firstNames) + " " + randomChoice(lastNames),
  avatarUrl:
    Math.random() > 0.1
      ? randomChoice(avatars) + "?seed=" + counter++
      : undefined,
  currency: "SOL",
  betAmount: Math.floor(Math.random() * 100),
});

export const createWatcher = (): WatcherCardProps => ({
  name: randomChoice(firstNames) + " " + randomChoice(lastNames),
  bet: Math.floor(Math.random() * 100) / 100,
});

export const getCompetitor = () =>
  randomChoice(firstNames) + " " + randomChoice(lastNames);

export default getSuggestedGame;
