import React from "react";
import Career from "../components/Sections/About/career";
import Team from "../components/Sections/About/team";
import InfoCompany from "../components/Sections/About/info";
import HeroAbout from "../components/Sections/About/heroAbout";
import FAQ from "../components/Sections/About/faq";
import Values from "../components/Sections/About/values";
import News from "../components/Sections/LandingPage/News/index.js";
import Started from "../components/Sections/LandingPage/started/index";
export default function About() {
  return (
    <div>
      <HeroAbout/>
      <InfoCompany/>
      <Team/>
      <Career/>
      <Values/>
      <FAQ/>
      <News />
      <Started />
    </div>
  );
}
