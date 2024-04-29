import Footer from "../../components/footerSection/Footer";
import Header from "../../components/headerSection/Header";
import NavBar from "../../menu/NavBar";
import MainImage from "/images/News-bg.png";

export default function NewsPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"News"}
        styles={"pt-52 pb-64 text-center"}
      />
      <Footer />
    </>
  );
}
