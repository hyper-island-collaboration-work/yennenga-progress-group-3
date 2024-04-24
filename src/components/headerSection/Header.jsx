import DonationForm from "../Donation form/DonationForm";
import TopBar from "./TopBar";
import "./styles.css"

export default function Header() {
  return (
    <header className="header absolute top-0 w-full font-['Arial'] text-lg text-light-gray">
      <TopBar />
      <div className="hero-section--container flex items-center gap-10 px-20 pt-60 pb-20">
        <DonationForm />
        <div className="font-['Apple SD Gothic Neo'] w-96 text-8xl font-semibold text-light-gray">
          <h1>Building sustainable societies</h1>
        </div>
      </div>
    </header>
  );
}
