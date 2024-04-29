import { NavLink } from "react-router-dom";


export default function TopBar() {
  return (
    <div className="topbar-container fixed top-0 z-10 flex w-full justify-between bg-umber px-10 py-4">
      <NavLink to="/Whistleblowing">
        <div className="black-btn inline-flex items-center justify-center gap-2">
          <button className="WhistleBlowing-btn">Whistle blowing</button>
          <img
            src="/vector/whistleIcon.svg"
            alt="whistle icon"
            className="h-[17.8px] w-6"
          />
        </div>
      </NavLink>
      <NavLink to="/Donation">
          <button className="blue-btn">
            Donate
          </button>
      </NavLink>
    </div>
  );
}
