import Header from "../headerSection/Header";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <Header />
      <div className="hero-section--container">
        <div className="text-light-gray text-5xl font-bold font-['Apple SD Gothic Neo']">
          <h1>
            Yennenga Progress creates sustainable societies via “The Good
            Village”
          </h1>
        </div>
      </div>
    </section>
  );
}
