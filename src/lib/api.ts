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
const currencies = ["ETH", "BTC", "DOGE"];

export const randomChoice = <T>(array: T[]) =>
  array[Math.floor(Math.random() * array.length)];

let counter = 0;
const getSuggestedGame = (): SuggestedGame => ({
  id: counter++,
  name: randomChoice(firstNames) + " " + randomChoice(lastNames),
  avatarUrl:
    Math.random() > 0.1
      ? "https://api.dicebear.com/9.x/micah/svg?seed=" + counter++
      : undefined,
  currency: randomChoice(currencies),
  betAmount: Math.floor(Math.random() * 100),
});

export default getSuggestedGame;
