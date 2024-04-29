import { NavLink } from "react-router-dom";

export default function MoreButton({ link, text }) {
  return (
    <NavLink to={`/${link}`}>
      <div className="black-btn flex items-center justify-center gap-2.5">
        <button>{text}</button>
        <img
          src="/public/vector/opentmoreIcon.svg"
          alt="Icon to open more"
          className="h-3.5 w-2"
        />
      </div>
    </NavLink>
  );
}
