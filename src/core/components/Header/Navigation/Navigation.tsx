import { NavLink } from "react-router";
import "./Navigation.css";
import { useMemo } from "react";
import { useWatchlistContext } from "../../../hooks/watchlist/WatchlistContext";

export default function MNavigation() {
  const [movies] = useWatchlistContext();

  const links = [
    {path: '/movies', label: 'Discover'},
    {path: '/watchlist', label: 'Watchlist'},
  ] as const;

  const linkRefs = useMemo(() => {
    return links.map(link => {
      return (
        <NavLink 
          to={link.path} 
          key={link.path} 
          className={({isActive}) => `mn-navigation__link ${isActive ? "mn-navigation__link--active" : ""}`}
        >
          {link.label} {link.path === links[1].path && movies.length > 0 ? `(${movies.length})` : "" }
        </NavLink>
      );
    })
  }, [movies])

  return (
    <nav className="mn-navigation">
      <ul className="mn-navigation__list">
        {linkRefs}
      </ul>
    </nav>
  );
}