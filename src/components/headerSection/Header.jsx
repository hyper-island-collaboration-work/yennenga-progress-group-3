import TopBar from "./TopBar";
import NavBar from "./menu/NavBar";

export default function Header() {
  return (
    <header className="header">
      <TopBar/>
      <NavBar />
    </header>
  );
}
