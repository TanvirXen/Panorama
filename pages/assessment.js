import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import HeaderSectionAssesment from "@/components/Sections/Assesment/HeaderSectionAssesment";
import HeroSectionAssesment from "@/components/Sections/Assesment/HeroSectionAssesment";
import ServiceBusinessAssesment from "@/components/Sections/Assesment/ServiceBusiness";
import LearnMoreAssesment from "@/components/Sections/Service/LearnMore";
import FAQ from "@/components/Sections/About/faq";
import KnowledgeInfoAssesment from "@/components/Sections/Service/Knowledge";
import News from "../components/Sections/LandingPage/News/index.js";
import Started from "../components/Sections/LandingPage/started/index";
import Head from "next/head";
export default function Assesment() {
  return (
    <div>
            <Head>
        <title>Assess your Business with Panorama</title>

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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
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
        <meta property="og:url" content="https://panoramamas.com/assessment" />
        <meta property="og:title" content="Understand, Prioritise, Solve." />
        <meta
          name="keywords"
          content="Automated assessment tools, Business optimization, Streamlined operations, Long-term success, Informed decision-making, Strengths identification, Improvement areas, Cutting-edge technology, Business insights, Sustainable growth.

          "
        />
        <meta
          property="og:description"
          content="Optimize your business operations with Panorama's automated assessment tools. Identify strengths, pinpoint areas for improvement, and make informed decisions to achieve sustained success."
        />
        <meta property="og:image" content="/meta/assesment.png" />
      </Head>
      <HeaderSectionAssesment />
      <HeroSectionAssesment />
      <ServiceBusinessAssesment />
      <LearnMoreAssesment />
      <FAQ />
      <KnowledgeInfoAssesment />
      <News />
      <Started />
    </div>
  );
}
