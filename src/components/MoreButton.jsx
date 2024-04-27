import { NavLink } from "react-router-dom";

export default function MoreButton({link, text}) {
  return (
    <NavLink to={`/${link}`}>
      <div className=" flex items-center justify-center gap-2.5 rounded-3xl bg-black h-12 w-44 font-['Arial']  font-bold text-light-gray transition delay-100 ease-in-out hover:bg-dark-blue">
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
