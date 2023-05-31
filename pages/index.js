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
      <Head>
        <title>Unlock your potential with Panorama</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://panoramamas.com/" />
        <meta property="og:title" content="Unlock your potential, Achieve your dreams." />
        <meta
          name="keywords"
          content="Panorama, Business Assessment, Fractional CFO, Expert support, Achieve dreams, Proven strategies, Guidance for success, Personalized guidance, Strategic planning, Goal achievement, Unlock potential, Professional guidance, Successful outcomes
          "
        />
        <meta
          property="og:description"
          content="Unlock your potential and achieve dreams with Panorama's expert support. Proven strategies & guidance set you on path to success."
        />
        <meta property="og:image" content="/meta/home.png" />
      </Head>
      <Hero />
      <Business />
      <Growth />
      <Service />
     
      {/* <Resources /> */}

      {/* <Trust /> */}
      <Work />
      {/* <Knowledge /> */}
      {/* <FAQ /> */}
      <News />
      <Started />
    </div>
  );
}
