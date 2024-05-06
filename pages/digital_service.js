import React from "react";
import HeroService from "../components/Sections/FractionalCFO/HeroService";
import ServiceBusiness from "../components/Sections/FractionalCFO/ServiceBusiness";
import FAQ from "../components/Sections/About/faq";
import News from "../components/Sections/LandingPage/News/index.js";
import Started from "../components/Sections/LandingPage/started/index";
import Overview from "../components/Sections/FractionalCFO/overview";
import KnowledgeInfo from "@/components/Sections/FractionalCFO/Knowledge";
import ServiceL from "../components/Sections/LandingPage/services/index.js";
import LearnMore from "../components/Sections/FractionalCFO/LearnMore";
import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Button} from "@carbon/react";
import Grid from "@mui/material/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Marquee from "react-easy-marquee";
export default function Website() {
  return (
    <div>
                        <Head>
        <title>Digital Service of Panorama</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
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

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://panoramamas.com/website-development" />
        <meta property="og:title" content="Unlock Financial Success Today." />
        <meta
          name="keywords"
          content="Panorama, Fractional CFO, Investment, Finance, Fractional CFO services, Expert financial management, Business financial potential, Experienced professionals, Financial optimization, Strategic financial planning, Financial consulting, Financial expertise, Business financial strategy, Financial growth.


          "
        />
        <meta
          property="og:description"
          content="With the motif to empower businesses with custom, user-centric solutions, we design and build web applications that are not only feature-rich but also intuitive and responsive, ensuring a seamless and engaging user experience."
        />
        <meta property="og:image" content="/solution/ui.webp" />
      </Head>
      <div className="serheroWeb">
      <Container maxWidth="xl">
        <div className="serheroser">
          <div>
            <Typography variant="small" color="neutral.b50">
              Digital Services
            </Typography>
          </div>
          <div style={{ paddingTop: "8px" ,paddingBottom:'160px'}}>
            <Typography variant="h1" color="neutral.b0">
            Get the digital solutions your business needs
            </Typography>
          </div>
          <div>
          <Button kind="primary" size="lg" onClick={()=>window.open("https://calendly.com/panoramaltd/consultation")}>
                Book a Meeting
          </Button>
          </div>
        </div>
      </Container>
    </div>
    <div className="overview">
      <Container maxWidth="xl">
        <div className="overText">
        <div>
        <Typography variant="small" color="neutral.b50">
        OVERVIEW
        </Typography>
        </div>
        <div style={{paddingTop:'8px',paddingBottom:'40px'}}>
        <Typography variant="h1" color="neutral.b900">
        Get digital solutions that are made to match exactly what your business needs and wants
        </Typography>
        </div>
        <div style={{paddingTop:'8px'}}>
        <Typography variant="large" color="neutral.b200">
        We know it can be challenging to keep up with the digital shift in business, but don&apos;t worry, you have us. Get everything your business needs in one place.

        </Typography>
        </div>
        </div>

      </Container>
    </div>
    <div className="serveBus">
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid md={8}>
            <div className="trsty">
              <Typography variant="small" color="neutral.b50">
                PROCESS
              </Typography>
            </div>
            <div>
              <Typography variant="h1R" color="neutral.b900">
              The process we follow for IT Services
              </Typography>
            </div>
            <div style={{ paddingTop: "24px" }}>
              <Typography variant="large" color="neutral.b200">
              First, we engage in discussions with the client to thoroughly understand their specific needs and requirements.
              </Typography>
            </div>
          </Grid>
          <Grid md={4}></Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
            <img src="assinit.svg" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Initial assessment
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                First, we engage in discussions with the client to thoroughly understand their specific needs and requirements.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="initial.svg" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Research
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Next, our team conducts research to determine the most suitable technology solutions for your business.
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="prototype.svg" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Prototype
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Afterward, we deliver an initial prototype through UI/UX design, giving you a visual representation to help you grasp the concept.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="demo.svg" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Quality Assurance
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Make features and take client feedback
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="product.svg" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Product
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Then, we create features and gather your feedback to refine and enhance the solution.

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="support.svg" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
        Ongoing Support
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Finally, we proceed to develop the product and provide continuous support to ensure its success.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
    <Container
				maxWidth="xl"
				style={{ paddingBottom: "40px", paddingTop: "40px" }}
			>
              <Typography variant="h1" color="neutral.b900">
Technologies we use
        </Typography>
				<Marquee
					duration={15000}
					background="#ffffff"
					height="220px"
					width="100%"
					axis="X"
					align="center"
					pauseOnHover={true}
					reverse={true}
				>
  <img src="shopify.png" alt="" style={{paddingLeft:'12px',paddingRight:'12px'}} />
  <img src="nodejs.svg" alt="" style={{paddingLeft:'12px',paddingRight:'12px'}} />
  <img src="react.svg" alt="" style={{paddingLeft:'12px',paddingRight:'12px'}} />
  <img src="firebase.svg" alt="" style={{paddingLeft:'12px',paddingRight:'12px'}} />
  <img src="webflow.svg" alt="" style={{paddingLeft:'12px',paddingRight:'12px'}} />
  <img src="sanity.svg" alt="" style={{paddingLeft:'12px',paddingRight:'12px'}} />
  <img src="mongo.svg" alt="" style={{paddingLeft:'12px',paddingRight:'12px'}} />
				</Marquee>
			</Container>
    <div className="growth">
      <Container maxWidth="xl">
      <div className="trsty">
              <Typography variant="small" color="neutral.b50">
              Our Software
              </Typography>
            </div>
        <div className="overText">
          <div></div>
          <div>
            <Typography variant="h1R" color="neutral.b900">
            The idea of digitalizing your business can be scary, but you got us.
            </Typography>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <Typography variant="large" color="neutral.b200">
            Your business deserves nothing but the IT services, and we are here to ensure that you are well taken care of.
            </Typography>
          </div>
        </div>
        <div style={{ paddingTop: "60px" }}>
          <Grid container spacing={0} style={{ paddingBottom: "100px" }}>
            <Grid xs={12} sm={12} md={12} lg={8}>
            <Carousel autoPlay={true} infiniteLoop={true} centerMode={false} interval={7000}>
              <img src="ass1.png" alt="" style={{ width: "100%" }} />
              <img src="ass2.png" alt="" style={{ width: "100%" }} />
              <img src="ass3.png" alt="" style={{ width: "100%" }} />
              <img src="ass4.png" alt="" style={{ width: "100%" }} />
              </Carousel>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={4}>
<div className="growthPadd">
<div style={{  paddingTop:'40px' }}>
                <Typography variant="h4" color="neutral.b800">
                Assessment Software
                </Typography>
              </div>
              <div style={{ paddingTop:'20px' }}>
                <Typography variant="large" color="neutral.b200">
                Our assessment software helps you identify areas where your business may need improvement and provides detailed analysis to guide you through the next steps for action.
                </Typography>
              </div>
              <div style={{ paddingTop:'40px' }}>
              <Button kind="primary" size="lg" onClick={()=>window.open("https://app.panoramamas.com/")}>
              Check Software
                </Button>
              </div>
</div>

            </Grid>
          </Grid>
          <Grid container spacing={0} style={{ paddingBottom: "100px" }}>
            <Grid xs={12} sm={12} md={12} lg={8}>
            <Carousel autoPlay={true} infiniteLoop={true} centerMode={false} interval={7000}>
              <img src="fn1.png" alt="" style={{ width: "100%" }} />
              <img src="fn2.png" alt="" style={{ width: "100%" }} />
              <img src="fn3.png" alt="" style={{ width: "100%" }} />
              <img src="fn4.png" alt="" style={{ width: "100%" }} />
              </Carousel>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={4}>
<div className="growthPadd">
<div style={{  paddingTop:'40px' }}>
                <Typography variant="h4" color="neutral.b800">
                Finance Software
                </Typography>
              </div>
              <div style={{ paddingTop:'20px' }}>
                <Typography variant="large" color="neutral.b200">
                Our finance software assists you to efficiently manage your business finances, from tracking costs to directly sending invoices to your clients within the same platform.
                </Typography>
              </div>
              <div style={{ paddingTop:'40px' }}>
              <Button kind="primary" size="lg" onClick={()=>window.open("https://calendly.com/panoramaltd/consultation")}>
                Book a Meeting
          </Button>
              </div>
</div>

            </Grid>
          </Grid>
        </div>
      </Container>
    </div>

      <News />
      <Started />
    </div>
  );
}
