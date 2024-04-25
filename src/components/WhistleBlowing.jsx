import React from "react";
import { NavLink } from "react-router-dom";
// import './styles.css';

function WhistleBlowing() {
  return (
    <div
      className="bg-sand absolute top-[2600px] flex h-full w-full items-center justify-center"
      style={{ height: "600px" }}
    >
      <div className="relative mx-auto max-w-lg p-6">
        <NavLink to="/Whistleblowing">
          <button
            className="whistlenlowing-btn text-white dark-blue relative overflow-hidden rounded-full bg-black px-16 py-8 font-bold transition duration-300 hover:border hover:bg-dark-blue"
            style={{ width: "500px", height: "136px" }}
          >
            <div className="flex h-full items-center justify-center gap-4">
              <div className="WhistleBlowing text-white font-['Apple SD Gothic Neo'] text-4xl">
                Whistle blowing
              </div>
              <img
                src="public\vector\whistleIcon.svg"
                alt="Whistle"
                className="h-10 w-10"
              />
            </div>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default WhistleBlowing;
