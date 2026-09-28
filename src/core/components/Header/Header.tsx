import MNavigation from "./Navigation/Navigation";
import "./Header.css";

export default function Header() {
  return (
    <header className="mn-header">
      <div className="name">Movie Night</div>
      <MNavigation />
    </header>
  );
}