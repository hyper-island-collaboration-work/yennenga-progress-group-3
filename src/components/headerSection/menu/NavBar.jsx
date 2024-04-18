import "./navbar.css";

export default function NavBar() {
  return (
    <nav className="nabvar flex h-24 items-center justify-between bg-black bg-opacity-70 pl-6 pr-14">
      <div className="navbar-logo">
        <a href="#">
          <img src="/images/yp_logo_brown.svg" alt="" />
        </a>
      </div>
      <ul className="navbar-list flex items-center justify-center gap-12 font-['Arial'] text-lg font-normal text-light-gray">
      <li className="list-item">
          <a className="list-link" href="#">
            Projects
          </a>
        </li>
        <li className="list-item">
          <a className="list-link" href="#">
            Company/join us
          </a>
        </li>
        <li className="list-item">
          <a className="list-link" href="#">
            About us
          </a>
        </li>
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
