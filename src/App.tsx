import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SuggestedGamesPage from "./pages/SuggestedGamesPage";
import GamePage from "./pages/GamePage";

const router = createBrowserRouter([
  {
    index: true,
    element: <SuggestedGamesPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
