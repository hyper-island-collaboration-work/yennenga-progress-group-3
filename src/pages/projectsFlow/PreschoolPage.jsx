import Footer from "../../components/footerSection/Footer";
import Header from "../../components/headerSection/Header";
import NavBar from "../../menu/NavBar";
import MainImage from "/images/Preschool-bg.png";

export default function PreschoolPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"Preschool"}
        styles={"pt-56 pb-64 flex justify-center"}
      />
      <Footer />
    </>
  );
}
