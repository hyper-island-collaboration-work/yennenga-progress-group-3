import Header from "../../components/headerSection/Header";
import OurMethods from "../../components/methodsSection/OurMethods";
import Navbar from "../../menu/NavBar";
import Footer from "../../components/footerSection/Footer";
import Partners from "../../components/partnersSection/Partners";
import RecentNews from "../../components/newsSection/RecentNews";
import MainImage from "/images/Landing-bg.png";
import DonationForm from "../../components/donationForm/DonationForm";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header
        bgImage={MainImage}
        heading={"Building sustainable societies"}
        styles={"flex items-center gap-10 px-20 pb-24 pt-10"}
      >
        <DonationForm formWidth={"w-[46.5rem]"}/>
      </Header>
      <OurMethods />
      <RecentNews />
      <Partners />
      <Footer />
    </>
  );
}
