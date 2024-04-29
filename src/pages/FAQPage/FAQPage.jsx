import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/headerSection/Header";
import NavBar from "../../components/menu/NavBar";
import MainImage from "/images/FAQ-bg.png";

export default function FAQPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"FAQ"}
        styles={"pt-52 pb-64 flex justify-center"}
      />
      <BottomBar />
    </>
  );
}
