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
  return <RouterProvider router={router} />;
}

export default App;
