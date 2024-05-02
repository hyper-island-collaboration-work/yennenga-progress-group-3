import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/headerSection/Header";
import Whistleblowing from "../../components/WhistleBlowing/Whistleblowing";
import NavBar from "../../components/menu/NavBar";
import MainImage from "/images/Whistleblowing-bg.png";
import TopBar from "../../components/headerSection/TopBar";

export default function WhistleblowingPage() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"Whistleblowing"}
        styles={"pt-52 pb-64 flex justify-center"}
      />
      <Whistleblowing />
      <BottomBar />
    </>
  );
}
