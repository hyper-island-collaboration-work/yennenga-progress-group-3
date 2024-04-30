import { NavLink } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function MoreButton({ link, text }) {
  return (
    <NavLink to={`/${link}`}>
      <div className="black-btn flex items-center justify-center gap-2.5">
        <button>{text}</button>
        <ChevronRightIcon
          alt="Icon to open more"
          className="h-6 w-6 text-light-gray"
        />
      </div>
    </NavLink>
  );
}
