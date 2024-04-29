import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/headerSection/Header";
import NavBar from "../../components/menu/NavBar";
import MainImage from "/images/Donation-bg.png";
import OurFunds from "../../components/donateFundsSection/OurFunds";
import FastDonation from "../../components/donateFundsSection/FastDonation";

export default function DonationPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"Donation"}
        styles={"pt-52 pb-64 flex justify-center"}
      />
      <FastDonation />
      <OurFunds />
      <BottomBar />
    </>
  );
}
