import React from "react";
import Trust from "../components/Sections/LandingPage/trust";

import HeroService from "../components/Sections/Service/HeroService";
import ServiceBusiness from "../components/Sections/Service/ServiceBusiness";
import FAQ from "../components/Sections/About/faq";
import News from "../components/Sections/LandingPage/News/index.js";
import Started from "../components/Sections/LandingPage/started/index";
import Overview from "../components/Sections/Service/overview";
export default function Service() {
  return (
    <div>
      <HeroService />
      <Overview/>
      <ServiceBusiness />
      <Trust />
      <FAQ />
      <News />
      <Started />
    </div>
  );
}
