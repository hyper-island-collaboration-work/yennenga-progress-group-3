import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/headerSection/Header";
import NavBar from "../../components/menu/NavBar";
import MainImage from "/images/Skill-bg.png";

export default function ShareSkillsPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"Share your skill"}
        styles={"pt-52 pb-64 flex justify-center"}
      />
      <BottomBar />
    </>
  );
}
