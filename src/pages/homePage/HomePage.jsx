import Header from "../../components/headerSection/Header";
import OurMethods from "../../components/methodsSection/OurMethods";
import Navbar from "../../menu/NavBar";
import Footer from "../../components/footerSection/Footer"
import SocialMedia from "../../components/footerSection/SocialMedia"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <OurMethods />
      <Footer />
      <SocialMedia />
    </>
  );
}
