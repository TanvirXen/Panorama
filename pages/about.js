import React from "react";
import Head from "next/head";
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
            <Head>
        <title>About Panorama</title>

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
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://panoramamas.com/about" />
        <meta property="og:title" content="Elevate Your Business" />
        <meta
          name="keywords"
          content="Panorama, Business Consultation, Fractional CFO, Impact, Personalized solutions, Business elevation, Competitive edge, Surpass competition, Strategic planning, Business growth, Professional guidance, Targeted solutions, Competitive advantage, Successful outcomes.

          "
        />
        <meta
          property="og:description"
          content="Elevate your business with Panorama's personalized solutions and surpass the competition. Get started now."
        />
        <meta property="og:image" content="/meta/about.png" />
      </Head>
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
