import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/headerSection/Header";
import TopBar from "../../components/headerSection/TopBar";
import NavBar from "../../components/menu/NavBar";
import MainImage from "/images/Partners-bg.png";

export default function PartnershipPage() {
  return (
    <>
    <TopBar />
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"Our partners"}
        styles={"pt-52 pb-64 flex justify-center"}
      />
      <BottomBar/>
      <div className="Frame586 w-96 h-14 relative">
        <div className="ThankYou w-96 left-[200px] top-0 absolute text-yellow-800 text-5xl font-bold font-['Apple SD Gothic Neo']">Thank you for helping us moving forward"</div>
      </div>
    </>
  );
}
