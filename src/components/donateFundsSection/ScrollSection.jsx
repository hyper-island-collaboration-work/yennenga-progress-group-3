import Funds from "./Funds";
import { NavLink } from "react-router-dom";
import ScrollButtons from "./ScrollButtons";

export default function ScrollSection() {
  let firstRowItems = [
    {
      image: "rectangle1.png",
      heading: "School sponsor",
      text: "300 SEK/month",
      link: "/SchoolSponsor",
    },
    {
      image: "rectangle2.png",
      heading: "Teacher salary sponsor",
      text: "1 500 - 3 500 SEK/month",
      link: "#",
    },
    {
      image: "rectangle2.png",
      heading: "Teacher salary sponsor",
      text: "1 500 - 3 500 SEK/month",
      link: "#",
    },
  ];

  let secondRowItems = [
    {
      image: "rectangle3.png",
      heading: "The scholarship fund",
      text: "12 000 SEK raised",
      link: "#",
    },
    {
      image: "rectangle4.png",
      heading: "The emergency fund",
      text: "12 000 SEK raised",
      link: "#",
    },
    {
      image: "rectangle6.png",
      heading: "The Clitoris fund",
      text: "12 000 SEK raised",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col gap-16">
      <div>
        <div className="mb-10">
          <h3 className="ml-16">Become a monthly sponsor</h3>
        </div>
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div>
            <div className="flex justify-center gap-10">
              {firstRowItems.map(({ image, heading, text, link }) => (
                <div key={heading}>
                  {link ? ( // Check if link exists
                    <NavLink to={link} activeClassName="active-link">
                      {" "}
                      {/* NavLink to another page */}
                      <Funds image={image} text={text} heading={heading} />
                    </NavLink>
                  ) : (
                    <Funds image={image} text={text} heading={heading} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <ScrollButtons />
      </div>
      <div>
        <div className="mb-10">
          <h3 className="ml-16">Donate to reach goals</h3>
        </div>
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div>
            <div className="flex justify-center gap-10">
              {secondRowItems.map(({ image, heading, text }) => (
                <Funds
                  key={heading}
                  image={image}
                  text={text}
                  heading={heading}
                />
              ))}
            </div>
          </div>
          <ScrollButtons />
        </div>
      </div>
    </div>
  );
}
