import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SuggestedGamesPage from "./pages/SuggestedGamesPage";
import GamePage from "./pages/GamePage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    index: true,
    element: <SuggestedGamesPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
