import React from "react";
import { NavLink } from "react-router-dom";
// import './styles.css';

function WhistleBlowing() {
  return (
    <div
      className="bg-sand absolute top-[3000px] flex h-full w-full items-center justify-center z-[-1]"
      style={{ height: "600px" }}
    >
      <div className="relative mx-auto max-w-lg p-6">
        <NavLink to="/Whistleblowing">
          <button  className="whistlenlowing-btn w-100 h-32  justify-center items-center inline-flex bg-black gap-8  relative overflow-hidden rounded-full  px-16 py-8 font-bold transition duration-300 hover:border hover:bg-dark-blue">

            <div className="flex  items-center  gap-4 ">
              <div className="WhistleBlowing text-zinc-100 font-bold  font-['Apple SD Gothic Neo'] text-4xl ">
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
