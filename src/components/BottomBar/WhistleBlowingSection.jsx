import React from "react";
import { NavLink } from "react-router-dom";

function WhistleBlowing() {
  return (
    <section className="flex items-center justify-center py-40">
      <NavLink to="/Whistleblowing">
        <div className="flex gap-8 rounded-full bg-black px-16 py-8 text-4xl transition duration-300 hover:bg-dark-blue ">
          <button> Whistle blowing</button>
          <img
            src="/vector/whistleIconBig.svg"
            alt="Whistle"
            className="h-16 w-24"
          />
        </div>
      </NavLink>
    </section>
  );
}

export default WhistleBlowing;
