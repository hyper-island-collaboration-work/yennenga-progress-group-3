import React from "react";
import { NavLink } from "react-router-dom";

function WhistleBlowing() {
  return (
    <section className="bg-sand flex items-center justify-center py-40">
      <NavLink to="/Whistleblowing">
        <div className="font-['Apple SD Gothic Neo'] flex gap-8 rounded-full bg-black px-16 py-8 text-4xl font-bold text-light-gray transition duration-300 hover:border hover:bg-dark-blue ">
          <button> Whistle blowing</button>
          <img
            src="public\vector\whistleIcon.svg"
            alt="Whistle"
            className="h-16 w-24"
          />
        </div>
      </NavLink>
    </section>
  );
}

export default WhistleBlowing;
