import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar/index";
import Business from "../components/Sections/LandingPage/buiness/index.js";
import Hero from "../components/Sections/LandingPage/hero/index.js";
import News from "../components/Sections/LandingPage/News/index.js";
import Resources from "../components/Sections/LandingPage/resources/index.js";
import Service from "../components/Sections/LandingPage/services/index.js";
import Started from "../components/Sections/LandingPage/started/index";
import Trust from "../components/Sections/LandingPage/trust/index.js";
import Work from "../components/Sections/LandingPage/work/index.js";
import styles from "../styles/Home.module.scss";
import FAQ from "../components/Sections/About/faq";
import Knowledge from "../components/Sections/LandingPage/Knowledge/index.js";
import Growth from "../components/Sections/LandingPage/Growth/index.js";
export default function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <Growth/>
      {/* <Resources /> */}
      <Business />
      {/* <Trust /> */}
      <Work />
      <Knowledge/>
      <FAQ />
      <News />
      <Started />
    </div>
  );
}
