import MoreButton from "../MoreButton";
import Carousel from "./Carousel";

export default function Partners() {
  return (
    <section className="partners flex flex-col items-center gap-24 py-24">
      <div className="grid w-full grid-cols-3 justify-items-end px-24 ">
        <div className="col-start-2">
          <h2 className="font-['Apple SD Gothic Neo'] text-5xl font-bold">
            Our partners
          </h2>
        </div>
        <div>
          <MoreButton link={"OurPartners"} text={"All partners"} />
        </div>
      </div>
      <Carousel />
    </section>
  );
}
