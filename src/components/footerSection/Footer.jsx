import React from "react";
import footerBackground from "../../../public/images/Footer_background.webp";
import footerLogo from "../../../public/images/yp_logo_white.svg";
import footer90KontoLogo from "../../../public/images/90_konto_logo_neg 1.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="bg-gray-200 relative top-[1500px] w-full bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <div className="font-arial container flex flex-col justify-between pl-20 pt-12 text-base font-normal text-light-gray md:flex-row xl:pr-40">
        <div className="flex flex-col md:w-1/3">
          <ul>
            <li>
              <NavLink to="/">
                <img
                  className="mb-8 w-fit"
                  src={footerLogo}
                  alt="Yennenga Progress Logo"
                />
              </NavLink>
            </li>
            <address>
              <li>
                <a
                  className="hover:underline"
                  href="mailto:info@yennengaprogress.se"
                >
                  info@yennengaprogress.se
                </a>
              </li>
            </address>
            <li className="mb-8">Org.nr: 802445-9987</li>
          </ul>
          <ul>
            <address>
              <li className="font-bold">Sweden</li>
              <li>
                <a className="hover:underline" href="tel: +46 735 176 200">
                  tel: +46 735 176 200
                </a>
              </li>
              <li>Kvarngatan 14, Stockholm</li>
              <li>Box 4040</li>
              <li className="mb-8">102 61 Stockholm</li>
              <li className="font-bold">Burkina Faso</li>
              <li>
                <a className="hover:underline" href="tel: +22 676 389 902">
                  tel: +22 676 389 902
                </a>
              </li>
              <li>Nakamtenga, Municipality Ziniare</li>
              <li className="mb-8">BP 336,Ziniare</li>
            </address>
            <li className="mb-8">90-konto:900243-7</li>
            <img
              src={footer90KontoLogo}
              alt="90 Konto logo"
              className="mb-16 mt-8 w-fit"
            />
          </ul>
        </div>
        <div className="flex flex-col md:w-1/3">
          <ul className="space-y-3">
            <li className="mb-8 font-bold hover:underline">
              <NavLink to="#">Our method</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/WhoYennengaProgressAre">About us</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/News">News section</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/Education">Current projects</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="#">Our structure</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="#">Our partners projects</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:w-1/3">
          <ul className="space-y-3">
            <li className="mb-8 font-bold hover:underline">
              <NavLink to="/BecomeAMember">Join us</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="#">Sida på svenska</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/Donation">Donate</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/ShareYourSkill">Share your competence</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="#">Become a business partner</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
