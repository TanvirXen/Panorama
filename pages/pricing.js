import React,{useState,useEffect} from "react";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import PricingAbout from "@/components/Sections/About/heroAbout/priceAbout";
import SinglePlanDetails from "@/components/plan/singlePlanDetails";
import SinglePLan from "@/components/plan/singlePlan";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
export default function Pricing() {
    const [Plan, setPlan] = useState([]);
    async function getPlan() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({});
    
        var requestOptions = {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: raw,
    
          redirect: "follow",
        };
        fetch("https://agsmcs.info/get_plan_list/", requestOptions)
          .then(async (response) => {
            let dsa = await response.json();
            if (dsa.result.plan) {
              setPlan(dsa.result.plan);
              //No user handle
            } else if (dsa.error && dsa.error.message == "Odoo Session Expired") {

            }
          })
          .catch((error) => console.log("error", error));
      }
      useEffect(() => {
        getPlan();
      }, []);
	return (
		<div>
			<Head>
				<title>Panorama - Pricing</title>

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
				<link
					href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
					rel="stylesheet"
				/>
				<link rel="preconnect" href="https://vitals.vercel-insights.com" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://panoramamas.com/pricing" />
				<meta property="og:title" content="Panorama Pricing" />
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
			<PricingAbout />
<Container maxWidth="xl">
<div className="featured-plan">
				<div className="featured-top">
					<Grid container spacing={0}>
						<Grid xs={2} sm={2} md={2} lg={2} xl={2}>
							<div className="featured-header">
								<div>
									<Typography variant="small" color="neutral.b800">
										Features
									</Typography>
								</div>
								<div>
									<Typography
										variant="h4B"
										color="neutral.b800"
										className="heading"
									>
										Features by Plan
									</Typography>
								</div>
								<div>
									<Typography variant="small" color="neutral.b800">
										Our most advanced tools, unlimited contacts, and priority
										support; built for teams.
									</Typography>
								</div>
							</div>
						</Grid>
						<Grid xs={10} sm={10} md={10} lg={10} xl={10}>
							<div className="featured-plans">
								{Plan.map((e) => {
									return (
										<SinglePLan
											Planname={e.name}
											description={e.description}
											key={e.name}
											planID={e.id}
											price={e.price}
											currency={e.currency}
										/>
									);
								})}
							</div>
						</Grid>
					</Grid>
				</div>
				<div className="featured-bottom">
					<Grid container spacing={0}>
						<Grid xs={2} sm={2} md={2} lg={2} xl={2}>
							<ul className="features-list-item">
								{Plan[0]?.attributes.map((e) => {
									return <li key={e.name}>{e.name}</li>;
								})}
							</ul>
						</Grid>
						<Grid xs={10} sm={10} md={10} lg={10} xl={10}>
							<div className="featured-plans">
								{Plan.map((e,) => {
									return <SinglePlanDetails e={e?.attributes} key={i} />;
								})}
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
</Container>
	
		</div>
	);
}
