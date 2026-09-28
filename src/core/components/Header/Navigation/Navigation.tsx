import { Link } from "react-router";
import "./Navigation.css";

export default function MNavigation() {
  const links = [
    {path: '/movies', label: 'Discover', placeholder: ''},
    {path: '/watchlist', label: 'Watchlist', placeholder: ''},
  ] as const;

  const linkRefs = links.map(link => {
    return (
      <Link to={link.path} key={link.path} className="mn-navigation__link">
        {link.label}{link.placeholder}
      </Link>
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