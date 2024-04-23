import DonationForm from "../DonationForm";
import Header from "../headerSection/Header";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <Header />
      <div className="hero-section--container flex items-center gap-4">
        <DonationForm />
        <div className="font-['Apple SD Gothic Neo'] w-[44rem] text-5xl font-bold text-light-gray">
          <h1>
            Yennenga Progress creates sustainable societies via “The Good
            Village”
          </h1>
        </div>
      </div>
    </section>
  );
}
