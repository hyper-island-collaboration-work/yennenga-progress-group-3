import { NavLink } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function MoreButton({ link, text }) {
  return (
    <NavLink to={`/${link}`}>
      <button className="black-btn flex items-center justify-center gap-2.5">
        {text}
        <ChevronRightIcon
          className="h-6 w-6 text-light-gray"
        />
      </button>
    </NavLink>
  );
}
