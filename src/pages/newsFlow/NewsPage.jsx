import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/headerSection/Header";
import NavBar from "../../components/menu/NavBar";
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
      <BottomBar />
    </>
  );
}
