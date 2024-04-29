import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/headerSection/Header";
import NavBar from "../../components/menu/NavBar";
import MainImage from "/images/Education-bg.png";

export default function EducationPage() {
  return (
    <>
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
