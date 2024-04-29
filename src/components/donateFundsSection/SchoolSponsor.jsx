import React, { useState } from "react";
import SchoolSponsorImg from "../../../public/images/SchoolSponsor.png";
import footer90KontoLogo from "../../../public/images/90_konto_black.png";
import SchoolPic from "../../../public/images/School.jpeg";
import { NavLink } from "react-router-dom";

export default function SchoolSponsor() {
  const [activeButton, setActiveButton] = useState("story");

  return (
    <section className="mb-20 mt-10 flex flex-col gap-10 px-20">
      <div className="flex items-center justify-between">
        <div>
          <NavLink to="/Donation">
            <button
              type="button"
              className="group flex cursor-pointer items-center justify-center focus:outline-none"
              data-carousel-prev
            >
              <span className="dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black group-hover:bg-black/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white">
                <svg
                  className="dark:text-gray-800 h-4 w-4 text-white rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
          </NavLink>
        </div>
        <div>
          <img src={footer90KontoLogo} alt="90 Konto logo" />
        </div>
      </div>
      <div className="flex gap-10 px-32">
        <div>
          <img src={SchoolSponsorImg} alt="School Sponsor" />
        </div>
        <div className="flex w-6/12 flex-col gap-10">
          <div className=" flex gap-10 border-b-2 border-b-2 border-light-gray+ pb-2 font-['Arial'] text-lg font-bold leading-loose">
            <button
              className={`text-black hover:text-burkina-blue ${activeButton === "story" ? "text-burkina-blue" : ""}`}
              onClick={() => setActiveButton("story")}
            >
              Story
            </button>
            <button
              className={`text-black hover:text-burkina-blue ${activeButton === "update" ? "text-burkina-blue" : ""}`}
              onClick={() => setActiveButton("update")}
            >
              Update
            </button>
          </div>
          <div className="flex flex-col gap-10">
            <h3>School Sponsor</h3>
            <p className="text-xl leading-loose text-light-green">
              300 SEK/month
            </p>
            <button className="inline-flex w-auto items-center justify-center rounded-full border-[20px] border-burkina-blue bg-burkina-blue text-2xl text-light-gray transition delay-100 ease-in-out hover:border-dark-blue hover:bg-dark-blue">
              Sponsor Schools
            </button>
            {activeButton === "story" && (
              <p className=" text-lg ">
                School sponsors are important for long-term development. We have
                about 70 sponsors and would need 200 more. A school sponsorship
                includes quality education, school dining, and health care for
                one student.
              </p>
            )}
            {activeButton === "update" && (
              <React.Fragment>
                <div className="max-h-[50%] overflow-x-scroll pt-6">
                  <p>
                    Thanks to all of our lovely sponsors, there are now 70
                    school kids who are getting support for quality education,
                    school dining, and health care! Let’s keep on pushing
                    sponsorships and make all the kids have support.
                  </p>
                  <div>
                    <img className="pt-4" src={SchoolPic} alt="School Pic" />
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
