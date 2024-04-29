import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/headerSection/Header";
import NavBar from "../../components/menu/NavBar";
import MainImage from "/images/Goals-bg.png";

export default function UNGoalsPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"UN Goals"}
        styles={"pt-52 pb-64 flex justify-center"}
      />
      <BottomBar />
    </>
  );
}
