import { createBrowserRouter } from "react-router";
import App from "./App";
import Movies from "./pages/Movies/Movies";

export const routes = createBrowserRouter([
  {
    path: '',
    Component: App,
    children: [
      {
        path: '/movies',
        Component: Movies,
      },
      {
        path: '/movies/:movieid',
        lazy: async () => {
          const {Movie} = await import("./pages/Movie/Movie");
          return {Component: Movie};
        },
      },
      {
        path: 'watchlist',
        lazy: async () => {
          const {Watchlist} = await import("./pages/Watchlist/Watchlist");
          return {Component: Watchlist};
        }
      }
    ]
  },
]);