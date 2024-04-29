import Footer from "../../components/footerSection/Footer";
import Header from "../../components/headerSection/Header";
import NavBar from "../../menu/NavBar";
import MainImage from "/images/Partners-bg.png";

export default function PartnershipPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"Our partners"}
        styles={"pt-52 pb-64 flex justify-center"}
      />
      <Footer />
    </>
  );
}
