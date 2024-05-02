import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import useScrollListener from "../../hooks/useScrollListener/useScrollListener";
import "./navbar.css";

export default function NavBar() {
  let dropdownItems = [
    {
      menuText: "Projects",
      dropdownList: [
        {
          itemText: "Education",
          itemLink: "/Education",
        },
        {
          itemText: "Health",
          itemLink: "#",
        },
        {
          itemText: "Management",
          itemLink: "#",
        },
      ],
    },
    {
      menuText: "Engage yourself",
      dropdownList: [
        {
          itemText: "Share your skill",
          itemLink: "/ShareYourSkill",
        },
        {
          itemText: "Start your own fund",
          itemLink: "/StartYourOwnFund",
        },
        {
          itemText: "Become our partner",
          itemLink: "/BecomeAMember",
        },
        {
          itemText: "FAQ",
          itemLink: "/FAQ",
        },
      ],
    },
    {
      menuText: "About us",
      dropdownList: [
        {
          itemText: "Who Yennenga Progress are",
          itemLink: "/AboutUs",
        },
        {
          itemText: "History",
          itemLink: "#",
        },
        {
          itemText: "Our partners",
          itemLink: "/OurPartners",
        },
        {
          itemText: "UN Goals",
          itemLink: "/UNGoals",
        },
      ],
    },
  ];

  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 0 && scroll.y - scroll.lastY < 0)
      _classList.push("showNavbar");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <nav
      className={`nabvar ${navClassList.join(" ")} sticky z-10 flex h-24 w-full items-center justify-between bg-black px-10 text-lg text-light-gray transition delay-100 ease-in-out`}
    >
      <div className="navbar-logo">
        <NavLink to="/" aria-label="Navigate to the Home Page">
          <img src="/vector/yp_logo_brown.svg" alt="Yennenga Progress Logo" />
        </NavLink>
      </div>
      <ul className="navbar-list flex h-full items-center justify-center gap-12">
        {dropdownItems.map((menu) => (
          <li className="list-item h-full">
            <Dropdown
              key={menu.menuText}
              rootItem={menu.menuText}
              items={menu.dropdownList}
            />
          </li>
        ))}
        <li className="list-item">
          <NavLink to="/News" className="list-link">
            News
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="list-link" to="#">
            Events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
