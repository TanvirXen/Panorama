import React from "react";
import HeroService from "../components/Sections/Service/HeroService";
import ServiceBusiness from "../components/Sections/Service/ServiceBusiness";
import FAQ from "../components/Sections/About/faq";
import News from "../components/Sections/LandingPage/News/index.js";
import Started from "../components/Sections/LandingPage/started/index";
import Overview from "../components/Sections/Service/overview";
import KnowledgeInfo from "@/components/Sections/Service/Knowledge";
import ServiceL from "../components/Sections/LandingPage/services/index.js";
import LearnMore from "../components/Sections/Service/LearnMore";
export default function Service() {
  return (
    <div>
      <HeroService />
      <Overview/>
      <ServiceBusiness />
      <KnowledgeInfo/>
      <LearnMore/>
      <ServiceL />
      <FAQ />
      <News />
      <Started />
    </div>
  );
}
