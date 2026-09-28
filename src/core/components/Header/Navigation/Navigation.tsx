import { NavLink } from "react-router";
import "./Navigation.css";

export default function MNavigation() {
  const links = [
    {path: '/movies', label: 'Discover', placeholder: ''},
    {path: '/watchlist', label: 'Watchlist', placeholder: ''},
  ] as const;

  const linkRefs = links.map(link => {
    return (
      <NavLink 
        to={link.path} 
        key={link.path} 
        className={({isActive}) => `mn-navigation__link ${isActive ? "mn-navigation__link--active" : ""}`}
      >
        {link.label}{link.placeholder}
      </NavLink>
    );
  })

  return (
    <nav className="mn-navigation">
      <ul className="mn-navigation__list">
        {linkRefs}
      </ul>
    </nav>
  );
}