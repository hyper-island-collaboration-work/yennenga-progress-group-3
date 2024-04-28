import Footer from "../../components/footerSection/Footer";
import Header from "../../components/headerSection/Header";
import NavBar from "../../menu/NavBar";
import MainImage from "/images/Donation-bg.png";
import OurFunds from "../../components/donateFundsSection/OurFunds";
import FastDonationForm from "../../components/donateFundsSection/FastDonation";

export default function DonationPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"Donation"}
        styles={"pt-60 pb-64 flex justify-center"}
      />
      <FastDonationForm />
      <OurFunds />
      <Footer />
    </>
  );
}
