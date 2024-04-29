import { NavLink } from "react-router-dom";
import FundsBackground from "/images/Union.png";
import ScrollSection from "./ScrollSection";

export default function OurFunds() {
  return (
    <section
      className="mb-64 flex flex-col gap-16 bg-cover bg-bottom px-10 pb-40 pt-24"
      style={{ backgroundImage: `url(${FundsBackground})` }}
    >
      <div className="flex items-center justify-between px-10">
        <h2 className="text-burkina-blue">Donate to our funds</h2>
        <NavLink to="/StartYourOwnFund">
          <button className="black-btn flex items-center justify-center">
            Start my own fund
          </button>
        </NavLink>
      </div>
      <ScrollSection />
    </section>
  );
}
