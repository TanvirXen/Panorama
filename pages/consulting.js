import React from "react";
import HeroService from "../components/Sections/Business_Consultation/HeroService";
import ServiceBusiness from "../components/Sections/Business_Consultation/ServiceBusiness";
import FAQ from "../components/Sections/About/faq";
import News from "../components/Sections/LandingPage/News/index.js";
import Started from "../components/Sections/LandingPage/started/index";
import Overview from "../components/Sections/Business_Consultation/overview";
import KnowledgeInfo from "@/components/Sections/Business_Consultation/Knowledge";
import ServiceL from "../components/Sections/LandingPage/services/index.js";
import LearnMore from "../components/Sections/Business_Consultation/LearnMore";
import Head from "next/head";
export default function Service() {
  return (
    <div>
     <Head>
        <title>Expert Business Consulting Services</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
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

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://panoramamas.com/consulting" />
        <meta property="og:title" content="All-in-One Business Solutions." />
        <meta
          name="keywords"
          content="Panorama, Business Consulting, Business Strategy, Change Management, Business consulting services, Expert consulting services, Business consultant matching, Perfect consultant match, Trustworthy consulting services, Comprehensive consulting services, Experienced consultants, Business solutions, Consulting expertise, Strategic consulting
          "
        />
        <meta
          property="og:description"
          content="Find the perfect consultant for your business with Panorama's expert services. Trust us to have you covered every step of the way."
        />
        <meta property="og:image" content="/meta/consulting.png" />
      </Head>
      <HeroService />
      <Overview/>
      <ServiceBusiness />
      <KnowledgeInfo/>
      <LearnMore/>
      {/* <ServiceL />
      <FAQ /> */}
      <News />
      <Started />
    </div>
  );
}
