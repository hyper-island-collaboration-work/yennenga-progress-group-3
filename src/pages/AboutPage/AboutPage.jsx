import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/headerSection/Header";
import TopBar from "../../components/headerSection/TopBar";
import NavBar from "../../components/menu/NavBar";
import MainImage from "/images/AboutUs-bg.png";

export default function WhoIsPage() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"About us"}
        styles={"pt-52 pb-64 flex justify-center"}
      />
      <BottomBar />
    </>
  );
}
