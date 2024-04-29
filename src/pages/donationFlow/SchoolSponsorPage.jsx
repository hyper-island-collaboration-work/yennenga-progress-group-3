import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/headerSection/Header";
import NavBar from "../../components/menu/NavBar";
import MainImage from "/images/SchoolSponsor-bg.png";
import SchoolSponsor from "../../components/donateFundsSection/SchoolSponsor";
import OurFunds from "../../components/donateFundsSection/OurFunds";

export default function SchoolSponsorPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"School sponsor"}
        styles={"pt-52 pb-64 flex justify-center"}
      />
      <SchoolSponsor />
      <OurFunds />
      <BottomBar/>
    </>
  );
}
