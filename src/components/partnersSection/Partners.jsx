import MoreButton from "../MoreButton";
import Carousel from "./Carousel";

export default function Partners() {
  return (
    <section className="partners flex flex-col items-center gap-24 py-24">
      <div className="flex justify-between border-umber+ w-full border-b-2 pb-6">
        <div>
          <h2 className="pl-36">Our partners</h2>
        </div>
        <div className="pr-28">
          <MoreButton link={"OurPartners"} text={"All partners"} />
        </div>
      </div>
      <Carousel />
    </section>
  );
}
