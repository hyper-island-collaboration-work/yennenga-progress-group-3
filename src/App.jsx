import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import DonationPage from "./pages/donationFlow/DonationPage";
import NewsPage from "./pages/newsFlow/NewsPage";
import PartnershipPage from "./pages/partnershipPage/PartnershipPage";
import WhistleblowingPage from "./pages/WhistleblowingPage/WhistleblowingPage";
import PaymentPage from "./pages/paymentPage/PaymentPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ShareSkillsPage from "./pages/shareSkillsPage/ShareSkillsPage";
import BecomeMemberPage from "./pages/becomeMemberPage/BecomeMemberPage";
import SchoolSponsorPage from "./pages/donationFlow/SchoolSponsorPage";
import EngageYourselfPage from "./pages/engageYourselfPage/EngageYourselfPage";
import FAQPage from "./pages/FAQPage/FAQPage";
import EducationPage from "./pages/projectsFlow/EducationPage";
import PreschoolPage from "./pages/projectsFlow/PreschoolPage";
import UNGoalsPage from "./pages/UNGoalsFlow/UNGoalsPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BecomeAMember" element={<BecomeMemberPage />} />
        <Route path="/Donation" element={<DonationPage />} />
        <Route path="/SchoolSponsor" element={<SchoolSponsorPage />} />
        <Route path="/StartYourOwnFund" element={<EngageYourselfPage />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/News" element={<NewsPage />} />
        <Route path="/OurPartners" element={<PartnershipPage />} />
        <Route path="/PaymentPageCard" element={<PaymentPage />} />
        <Route path="/Education" element={<EducationPage />} />
        <Route path="/Preschool" element={<PreschoolPage />} />
        <Route path="/UNGoals" element={<UNGoalsPage />} />
        <Route path="/ShareYourSkill" element={<ShareSkillsPage />} />
        <Route path="/Whistleblowing" element={<WhistleblowingPage />} />
        <Route path="/AboutUs" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
