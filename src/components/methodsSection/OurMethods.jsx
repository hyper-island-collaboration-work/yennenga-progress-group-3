import Method from "./Method";

export default function OurMethods() {
  let methodItems = [
    {
      image: "method1.png",
      heading: "Local projects go glocal",
      spanText:
        "Yennenga Progress takes a comprehensive approach, addressing all UN Global Goals and embracing entrepreneurship",
      text: " It focuses on identifying and meeting local needs in Nakamtenga, Burkina Faso, West Africa.",
    },
    {
      image: "method2.png",
      heading: "Competence for change",
      spanText:
        "Yennenga Progress is developing a model to achieve the UN Global Goals through social franchising, creating jobs and aiming for village self-sustainability in funding their own welfare.",
      text: "Lasting progress arises from local initiatives in collaboration with international partnerships.",
    },
    {
      image: "method3.png",
      heading: "Sustainable societies",
      spanText:
        "The Yennenga Progress network offers ongoing training to local Change Makers based on their needs, providing tools and knowledge for their development. ",
      text: "Collaboration fosters innovative solutions, meets local needs, and establishes best practices to support others in achieving the UN Global Goals.",
    },
  ];

  return (
    <section className="section-method my-24 flex flex-col gap-16">
      <div className="border-umber+ w-full border-b-2 pb-6">
        <h2 className="pl-36">Our method</h2>
      </div>
      <div className="flex gap-6 px-14">
        {methodItems.map(({ image, heading, text, spanText }) => (
          <Method
            key={heading}
            image={image}
            spanText={spanText}
            text={text}
            heading={heading}
          />
        ))}
      </div>
    </section>
  );
}
