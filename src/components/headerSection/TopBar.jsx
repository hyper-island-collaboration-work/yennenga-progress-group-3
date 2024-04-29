import { NavLink } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="topbar-container fixed top-0 z-10 flex h-20 w-full items-center justify-between bg-umber px-10 py-4 font-['Arial'] text-lg font-semibold leading-10">
      <NavLink to="/Whistleblowing">
        <div className="inline-flex items-center justify-center gap-2 rounded-3xl bg-black px-8 py-1 transition delay-100 ease-in-out hover:bg-dark-blue">
          <button className="WhistleBlowing-btn">Whistle blowing</button>
          <img
            src="/vector/whistleIcon.svg"
            alt="whistle icon"
            className="h-[17.8px] w-6"
          />
        </div>
      </NavLink>
      <NavLink to="/Donation">
        <div className="topbar-button flex inline-flex h-11 items-center justify-center gap-6">
          <button className="Donate-btn inline-flex justify-center rounded-3xl border-2 border-burkina-blue bg-burkina-blue px-8 py-0.5 transition delay-100 ease-in-out hover:border-dark-blue hover:bg-dark-blue">
            Donate
          </button>
        </div>
      </NavLink>
    </div>
  );
}
