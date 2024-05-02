import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/headerSection/Header";
import TopBar from "../../components/headerSection/TopBar";
import NavBar from "../../components/menu/NavBar";
import MainImage from "/images/Education-bg.png";

export default function EducationPage() {
  return (
    <>
    <TopBar />
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"Education"}
        styles={"pt-52 pb-64 flex justify-center"}
      />
      <BottomBar />
    </>
  );
}
