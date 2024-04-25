import DonationForm from "../donation form/DonationForm";
import TopBar from "./TopBar";
import "./styles.css";

export default function Header() {
  return (
    <header className="header absolute top-0 w-full text-light-gray">
      <TopBar />
      <div className="hero-section--container flex items-center gap-10 px-20 pb-20 pt-60">
        <DonationForm />
        <div className=" w-96">
          <h1 className="font-['Apple SD Gothic Neo'] text-8xl font-semibold">
            Building sustainable societies
          </h1>
        </div>
      </div>
    </header>
  );
}
