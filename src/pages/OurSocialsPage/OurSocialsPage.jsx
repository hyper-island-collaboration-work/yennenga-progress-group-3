import Footer from "../../components/footerSection/Footer";
import Header from "../../components/headerSection/Header";
import NavBar from "../../menu/NavBar";
import MainImage from "/images/Socials-bg.png";

export default function OurSocialsPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"Our Socials"}
        styles={"pt-52 pb-64 flex justify-center"}
      />
      <Footer />
    </>
  );
}
