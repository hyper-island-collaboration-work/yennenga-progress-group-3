import TopBar from "./TopBar";

export default function Header({ bgImage, heading, styles, children }) {
  return (
    <header
      style={{ backgroundImage: `url(${bgImage})` }}
      className="header bg-cover bg-bottom text-light-gray "
    >
      <TopBar />
      <div className={`hero-section--container ${styles}`}>
        {children}
        <div>
          <h1 className="font-['Apple SD Gothic Neo'] text-8xl font-semibold">
            {heading}
          </h1>
        </div>
      </div>
    </header>
  );
}
