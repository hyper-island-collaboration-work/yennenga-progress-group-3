import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/headerSection/Header";
import NavBar from "../../components/menu/NavBar";
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
      <BottomBar/>
    </>
  );
}
