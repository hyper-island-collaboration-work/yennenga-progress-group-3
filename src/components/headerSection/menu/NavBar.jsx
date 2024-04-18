import Dropdown from "./Dropdown";

export default function NavBar() {
  let dropdownItems = [
    {
      menuText: "Projects",
      dropdownList: [
        "Education",
        "Health",
        "Infrastructure/entrepreneurship",
        "Management",
      ],
    },
    {
      menuText: "Company/join us",
      dropdownList: [
        "How can you help",
        "How it works",
        "Share your skill",
        "FAQ",
      ],
    },
    {
      menuText: "About us",
      dropdownList: [
        "Our partners",
        "Who Yennenga Progress are",
        "Our socials",
        "UN Goals",
      ],
    },
  ];

  return (
    <nav className="nabvar flex h-24 items-center justify-between gap-96 bg-black bg-opacity-70 pl-6 pr-14 font-normal">
      <div className="navbar-logo">
        <a href="#">
          <img src="/images/yp_logo_brown.svg" alt="Yennenga Progress Logo" />
        </a>
      </div>
      <ul className="navbar-list flex items-center justify-center gap-12">
        {dropdownItems.map((menu) => (
          <li className="list-item">
            <Dropdown
              key={menu.menuText}
              rootItem={menu.menuText}
              items={menu.dropdownList}
            />
          </li>
        ))}
        <li className="list-item">
          <a className="list-link" href="#">
            News
          </a>
        </li>
        <li className="list-item">
          <a className="list-link" href="#">
            Calendar
          </a>
        </li>
      </ul>
    </nav>
  );
}
