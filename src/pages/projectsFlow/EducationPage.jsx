import Footer from "../../components/footerSection/Footer";
import Header from "../../components/headerSection/Header";
import NavBar from "../../menu/NavBar";
import MainImage from "/images/Education-bg.png";

export default function EducationPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"Education"}
        styles={"pt-60 pb-64 flex justify-center"}
      />
      <Footer />
    </>
  );
}
