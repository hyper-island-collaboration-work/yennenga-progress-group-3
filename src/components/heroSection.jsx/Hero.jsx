import Header from "../headerSection/Header";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <Header />
      <div className="hero-section--container">
        <div className="heading font-['Apple SD Gothic Neo'] text-5xl font-bold text-black">
          <h1>
            Yennenga Progress creates sustainable societies via “The Good
            Village”
          </h1>
        </div>
      </div>
    </section>
  );
}
