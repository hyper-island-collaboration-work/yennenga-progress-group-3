import TopBar from "./TopBar";
import NavBar from "./menu/NavBar";

export default function Header() {
  return (
    <header className="header font-['Arial'] text-lg text-light-gray">
      <TopBar />
      <NavBar />
    </header>
  );
}
