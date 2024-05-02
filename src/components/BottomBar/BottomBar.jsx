import React from "react";
import footerBackground from "/images/Footer_background.webp";
import footerLogo from "/vector/yp_logo_white.svg";
import footer90KontoLogo from "/vector/svenskkontroll.svg";
import { NavLink } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import WhistleBlowing from "./WhistleBlowingSection";

function BottomBar() {
  return (
    <>
      <div className="bg-sand">
        <WhistleBlowing />
        <footer
          className="footer flex flex-col gap-10 bg-cover bg-top px-20 pb-16 pt-28 text-lg leading-loose"
          style={{ backgroundImage: `url(${footerBackground})` }}
        >
          <div>
            <NavLink to="/">
              <img src={footerLogo} alt="Yennenga Progress Logo" />
            </NavLink>
          </div>
          <div className="footer-container flex gap-24 text-lg">
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
                <h6>Sweden</h6>
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
                <h6>Burkina Faso</h6>
                <p>
                  <a className="hover:underline" href="tel: +22 676 389 902">
                    tel: +22 676 389 902
                  </a>
                </p>
                <p>Nakamtenga, Municipality Ziniare</p>
                <p>BP 336,Ziniare</p>
              </div>
              <p>90-konto:900243-7</p>
              <img src={footer90KontoLogo} alt="90 Konto logo" />
            </address>
            <div className="flex gap-20">
              <ul className="flex flex-col gap-4 font-bold">
                <li>
                  <NavLink to="/News">Donate</NavLink>
                </li>
                <li>
                  <NavLink to="#">News</NavLink>
                </li>
                <li>
                  <NavLink to="/Donation">Events</NavLink>
                </li>
                <li>
                  <NavLink to="/Whistleblowing">Whistle blowing</NavLink>
                </li>
              </ul>
              <ul className="flex flex-col gap-2.5 ">
                <li className="mb-2.5 font-bold">Projects</li>
                <li>
                  <NavLink to="/Education">Education</NavLink>
                </li>
                <li>
                  <NavLink to="#">Health</NavLink>
                </li>
                <li>
                  <NavLink to="#">Management</NavLink>
                </li>
              </ul>
              <ul className="flex flex-col gap-2.5">
                <li className="mb-2.5 font-bold ">Engage yourself</li>
                <li>
                  <NavLink to="/ShareYourSkill">Share your skill</NavLink>
                </li>
                <li>
                  <NavLink to="/StartYourOwnFund">Start your own fund</NavLink>
                </li>
                <li>
                  <NavLink to="/BecomeAMember">Become a member</NavLink>
                </li>
                <li>
                  <NavLink to="/FAQ">FAQ</NavLink>
                </li>
              </ul>
              <ul className="flex flex-col gap-2.5">
                <li className="mb-2.5 font-bold ">About us</li>
                <li>
                  <NavLink to="/AboutUs">Who Yennenga Progress are</NavLink>
                </li>
                <li>
                  <NavLink to="#">History</NavLink>
                </li>
                <li>
                  <NavLink to="/OurPartners">Our partners</NavLink>
                </li>
                <li>
                  <NavLink to="/UNGoals">UN Goals</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
      <SocialMedia />
    </>
  );
}

export default BottomBar;
