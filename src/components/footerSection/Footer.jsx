import React from "react";
import footerBackground from "/images/Footer_background.webp";
import footerLogo from "/images/yp_logo_white.svg";
import footer90KontoLogo from "/images/90_konto_logo_neg 1.png";
import { NavLink } from "react-router-dom";
import SocialMedia from "./SocialMedia"

function Footer() {
  return (
    <>
      <footer
        className="bg-sand footer flex gap-40 bg-cover bg-top px-16 pt-40 pb-16 font-['Arial'] text-lg font-normal leading-loose text-light-gray"
        style={{ backgroundImage: `url(${footerBackground})` }}
      >
        <div className="footer-container flex flex-col gap-10 text-lg">
          <div>
            <NavLink to="/">
              <img src={footerLogo} alt="Yennenga Progress Logo" />
            </NavLink>
          </div>
          <address className="flex flex-col gap-10 not-italic">
            <div>
              <a
                className="hover:underline"
                href="mailto:info@yennengaprogress.se"
              >
                info@yennengaprogress.se
              </a>
              <p>Org.nr: 802445-9987</p>
            </div>
            <div>
              <h6 className="font-bold">Sweden</h6>
              <p>
                <a className="hover:underline" href="tel: +46 735 176 200">
                  tel: +46 735 176 200
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/HxY9rMso4igB972q9"
                >
                  Kvarngatan 14, Stockholm
                </a>
              </p>
              <p>Box 4040</p>
              <p>102 61 Stockholm</p>
            </div>
            <div>
              <h6 className="font-bold">Burkina Faso</h6>
              <p>
                <a className="hover:underline" href="tel: +22 676 389 902">
                  tel: +22 676 389 902
                </a>
              </p>
              <p>Nakamtenga, Municipality Ziniare</p>
              <p>BP 336,Ziniare</p>
            </div>
            <p>90-konto:900243-7</p>
          </address>
          <img src={footer90KontoLogo} alt="90 Konto logo" />
        </div>
        <div className="flex gap-32">
          <ul className="flex flex-col gap-2.5 ">
            <li className="mb-2.5 font-bold">
              <NavLink to="#" target="_blank">
                Our method
              </NavLink>
            </li>
            <li>
              <NavLink to="/WhoYennengaProgressAre" target="_blank">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/News" target="_blank">
                News section
              </NavLink>
            </li>
            <li>
              <NavLink to="/Education" target="_blank">
                Current projects
              </NavLink>
            </li>
            <li>
              <NavLink to="#" target="_blank">
                Our structure
              </NavLink>
            </li>
            <li>
              <NavLink to="#" target="_blank">
                Our partners projects
              </NavLink>
            </li>
          </ul>
          <ul className="flex flex-col gap-2.5">
            <li className="mb-2.5 font-bold ">
              <NavLink to="/BecomeAMember" target="_blank">
                Join us
              </NavLink>
            </li>
            <li>
              <NavLink to="#" target="_blank">
                Sida på svenska
              </NavLink>
            </li>
            <li>
              <NavLink to="/Donation" target="_blank">
                Donate
              </NavLink>
            </li>
            <li>
              <NavLink to="/ShareYourSkill" target="_blank">
                Share your competence
              </NavLink>
            </li>
            <li>
              <NavLink to="#" target="_blank">
                Become a business partner
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
      <SocialMedia />
    </>
  );
}

export default Footer;
