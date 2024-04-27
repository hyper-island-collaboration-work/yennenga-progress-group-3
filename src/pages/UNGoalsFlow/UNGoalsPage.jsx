import WhistleBlowing from "../../components/WhistleBlowing";
import Footer from "../../components/footerSection/Footer";
import Header from "../../components/headerSection/Header";
import NavBar from "../../menu/NavBar";
import MainImage from "/images/Goals-bg.png";

export default function UNGoalsPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"UN Goals"}
        styles={"pt-60 pb-64 flex justify-center"}
      />
      <WhistleBlowing />
      <Footer />
    </>
  );
}
