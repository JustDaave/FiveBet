import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ThreeCardPoker from "./pages/ThreeCardPoker";
import Blackjack from "./pages/Blackjack";
import Roulette from "./pages/Roulette";
import SlotMachines from "./pages/SlotMachines";
import InsideTrack from "./pages/InsideTrack";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/games/three-card-poker",
    Component: ThreeCardPoker,
  },
  {
    path: "/games/blackjack",
    Component: Blackjack,
  },
  {
    path: "/games/roulette",
    Component: Roulette,
  },
  {
    path: "/games/slots",
    Component: SlotMachines,
  },
  {
    path: "/games/inside-track",
    Component: InsideTrack,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
