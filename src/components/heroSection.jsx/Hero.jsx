import DonationForm from "../Donation form/DonationForm";
import Header from "../headerSection/Header";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero-section absolute w-full">
      <Header />
      <div className="hero-section--container relative flex items-center gap-10 px-20 pb-20 pt-10">
        <DonationForm />
        <div className="font-['Apple SD Gothic Neo'] w-96 text-8xl font-semibold text-light-gray">
          <h1>Building sustainable societies</h1>
        </div>
      </div>
    </section>
  );
}
