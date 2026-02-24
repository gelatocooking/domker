import ContactSection from "./components/ContactSection/ContactSection";
import EntryRequirementsSection from "./components/EntryRequirementsSection/EntryRequirementsSection";
import FaqSection from "./components/FaqSection/FaqSection";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import LeadFormSection from "./components/LeadFormSection/LeadFormSection";
import PainPointsSection from "./components/PainPointsSection/PainPointsSection";
import ProcessSection from "./components/ProcessSection/ProcessSection";
import ProofSection from "./components/ProofSection/ProofSection";
import RisksSection from "./components/RisksSection/RisksSection";
import ScenariosSection from "./components/ScenariosSection/ScenariosSection";
import SlaSection from "./components/SlaSection/SlaSection";
import WhyDomkerSection from "./components/WhyDomkerSection/WhyDomkerSection";

export default function HomePage() {
  return (
    <main className="pageBg">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <ScenariosSection />
      <ProcessSection />
      <EntryRequirementsSection />
      <WhyDomkerSection />
      <SlaSection />
      <RisksSection />
      <ProofSection />
      <FaqSection />
      <ContactSection />
      <LeadFormSection />
    </main>
  );
}

