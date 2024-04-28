import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import DonationPage from "./pages/donationFlow/DonationPage";
import NewsPage from "./pages/newsFlow/NewsPage";
import PartnershipPage from "./pages/partnershipPage/PartnershipPage";
import WhistleblowingPage from "./pages/WhistleblowingPage/WhistleblowingPage";
import PaymentPage from "./pages/paymentPage/PaymentPage";
import WhoIsPage from "./pages/AboutPage/AboutPage";
import ShareSkillsPage from "./pages/shareSkillsPage/ShareSkillsPage";
import OurSocialsPage from "./pages/OurSocialsPage//OurSocialsPage";
import BecomeMemberPage from "./pages/becomeMemberPage/BecomeMemberPage";
import SchoolSponsorPage from "./pages/donationFlow/SchoolSponsorPage";
import EngageYourselfPage from "./pages/engageYourselfPage/EngageYourselfPage";
import FAQPage from "./pages/FAQPage/FAQPage";
import EducationPage from "./pages/projectsFlow/EducationPage";
import PreschoolPage from "./pages/projectsFlow/PreschoolPage";
import UNGoalsPage from "./pages/UNGoalsFlow/UNGoalsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BecomeAMember" element={<BecomeMemberPage />} />
        <Route path="/Donation" element={<DonationPage />} />
        <Route path="/SchoolSponsor" element={<SchoolSponsorPage />} />
        <Route path="/StartYourOwnFund" element={<EngageYourselfPage />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/News" element={<NewsPage />} />
        <Route path="/OurSocials" element={<OurSocialsPage />} />
        <Route path="/OurPartners" element={<PartnershipPage />} />
        <Route path="/PaymentPageCard" element={<PaymentPage />} />
        <Route path="/Education" element={<EducationPage />} />
        <Route path="/Preschool" element={<PreschoolPage />} />
        <Route path="/UNGoals" element={<UNGoalsPage />} />
        <Route path="/ShareYourSkill" element={<ShareSkillsPage />} />
        <Route path="/Whistleblowing" element={<WhistleblowingPage />} />
        <Route path="/AboutUs" element={<WhoIsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
