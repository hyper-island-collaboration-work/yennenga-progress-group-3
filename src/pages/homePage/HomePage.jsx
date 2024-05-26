import Header from "../../components/headerSection/Header";
import OurMethods from "../../components/methodsSection/OurMethods";
import Navbar from "../../components/menu/NavBar";
import BottomBar from "../../components/BottomBar/BottomBar";
import Partners from "../../components/partnersSection/Partners";
import RecentNews from "../../components/newsSection/RecentNews";
import MainImage from "/images/Landing-bg.png";
import DonationForm from "../../components/donationForm/DonationForm";
import TopBar from "../../components/headerSection/TopBar";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Header
        bgImage={MainImage}
        heading={"Building sustainable societies"}
        styles={"flex items-center gap-10 pt-7 px-20 pb-28"}
      >
      <DonationForm/>
      </Header>
      <OurMethods />
      <RecentNews />
      <Partners />
      <BottomBar />
    </>
  );
}
