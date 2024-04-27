import Footer from "../../components/footerSection/Footer";
import Header from "../../components/headerSection/Header";
import NavBar from "../../menu/NavBar";
import MainImage from "/images/FAQ-bg.png";

export default function FAQPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"FAQ"}
        styles={"pt-60 pb-64 flex justify-center"}
      />
      <Footer />
    </>
  );
}
