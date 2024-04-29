import Footer from "../../components/footerSection/Footer";
import Header from "../../components/headerSection/Header";
import NavBar from "../../menu/NavBar";
import MainImage from "/images/Fund-bg.png";

export default function EngageYourselfPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"Start your own fund"}
        styles={"pt-52 pb-64 px-64 flex justify-center"}
      />
      <Footer />
    </>
  );
}
