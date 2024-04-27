import Footer from "../../components/footerSection/Footer";
import Header from "../../components/headerSection/Header";
import NavBar from "../../menu/NavBar";
import MainImage from "/images/AboutUs-bg.png";

export default function WhoIsPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"About us"}
        styles={"pt-60 pb-64 flex justify-center"}
      />
      <Footer />
    </>
  );
}
