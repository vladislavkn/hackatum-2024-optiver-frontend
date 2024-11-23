import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import SuggestedGamesPage from "./pages/SuggestedGamesPage";
import LoginPage from "./pages/LoginPage";
import Protected from "./components/Protected";
import WatchPage from "./pages/WatchPage";
import GamePage from "./pages/GamePage";
import Profile from "./pages/Profile";
import { Toaster } from "@/components/ui/sonner";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  MathWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import "@solana/wallet-adapter-react-ui/styles.css";
import { useMemo } from "react";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/userspace",
    element: <Protected />,
    children: [
      {
        path: "/userspace/play",
        element: <SuggestedGamesPage />,
      },
      {
        path: "/userspace/watch",
        element: <WatchPage />,
      },
      {
        path: "/userspace/game",
        element: <GamePage />,
      },
      {
        path: "/userspace/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new MathWalletAdapter(),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <RouterProvider router={router} />
          <Toaster />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
