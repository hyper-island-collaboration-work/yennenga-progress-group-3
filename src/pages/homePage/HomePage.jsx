import Header from "../../components/headerSection/Header";
import OurMethods from "../../components/methodsSection/OurMethods";
import Navbar from "../../menu/NavBar";
import Footer from "../../components/footerSection/Footer";
import SocialMedia from "../../components/footerSection/SocialMedia";
import Partner from "../../components/partnersSection/Partner";
import WhistleBlowing from "../../components/WhistleBlowing";
import RecentNews from "../../components/newsSection/RecentNews";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <OurMethods />
       <RecentNews /> 
      <Partner />
      <WhistleBlowing />
      <Footer />
      <SocialMedia />
    </>
  );
}
