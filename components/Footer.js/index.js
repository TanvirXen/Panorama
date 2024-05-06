import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/navigation";
export default function Footer() {
	const router = useRouter();
	return (

		<div className="footer">
			<Container maxWidth="xl">
				<div className="foot">
					<div className="flogo">
						<div>
							<img src="logoBlack.svg" alt="" srcset="" />
						</div>
						<div>
							<Typography variant="small" color="neutral.b100">
								Empowering individuals and fostering collective growth to turn
								dreams into reality.
								<br />
								<br />
								Redefining the current business process through data-driven
								solutions to solve emerging challenges. Providing
								sustainable,user-centric,and comprehensive global solutions.
							</Typography>
						</div>
						<div>
							<Typography variant="small" color="neutral.b100">
							Trade Licence Number : TRAD/DNCC/139591/2022
								<br />
								<br />
							</Typography>
						</div>
					</div>
					<div className="ftext">
						<Grid container spacing={2}>
							{/* <Grid item sm={3} md={3}>
								<div className="frl">
									<Typography
										variant="small"
										color="neutral.b0"
										style={{ paddingBottom: "8px" }}
									>
										Resources
									</Typography>
									<Typography variant="small" color="neutral.b100">
										Past Services
									</Typography>
									<Typography variant="small" color="neutral.b100">
										Knowledge Hub
									</Typography>{" "}
									<Typography variant="small" color="neutral.b100">
										Templates
									</Typography>
									<Typography variant="small" color="neutral.b100">
										Publications
									</Typography>
								</div>
							</Grid>
							<Grid item sm={3} md={3}>
								<div className="frl">
									<Typography
										variant="small"
										color="neutral.b0"
										style={{ paddingBottom: "8px" }}
									>
										Pricing
									</Typography>
									<Typography variant="small" color="neutral.b100">
										Starter
									</Typography>
									<Typography variant="small" color="neutral.b100">
										Basic
									</Typography>{" "}
									<Typography variant="small" color="neutral.b100">
										Standard
									</Typography>
									<Typography variant="small" color="neutral.b100">
										Premium
									</Typography>
								</div>
							</Grid> */}
							<Grid item sm={3} md={3}>
								<div className="frl">
									<Typography
										variant="small"
										color="neutral.b0"
										style={{ paddingBottom: "8px" }}
									>
										Company
									</Typography>
									<Typography variant="small" color="neutral.b100" 	onClick={() => router.push("/about")}>
										About Us
									</Typography>
									{/* <Typography variant="small" color="neutral.b100">
                    Blog
                  </Typography>{" "} */}
									<Typography
										variant="small"
										color="neutral.b100"
										onClick={() => router.push("/privacy_policy")}
									>
										Privacy Policy
									</Typography>
									<Typography
										variant="small"
										color="neutral.b100"
										onClick={() => router.push("/terms&conditions")}
									>
										Terms & Conditions
									</Typography>
									<Typography
										variant="small"
										color="neutral.b100"
										onClick={() => router.push("/refundPolicy")}
									>
										Refund Policy
									</Typography>
									<a href="/Panorama_company_profile.pdf">
										{" "}
										<Typography variant="small" color="neutral.b100">
											Company Profile
										</Typography>
									</a>
								</div>
							</Grid>
							<Grid item sm={3} md={3}>
								<div className="frl">
									<Typography
										variant="small"
										color="neutral.b0"
										style={{ paddingBottom: "8px" }}
									>
										Social
									</Typography>
									<Typography
										variant="small"
										color="neutral.b100"
										onClick={() =>
											window.open(
												"https://www.linkedin.com/company/panoramamas/"
											)
										}
									>
										Linkedin
									</Typography>
									<Typography
										variant="small"
										color="neutral.b100"
										onClick={() =>
											window.open("https://www.facebook.com/panoramamas")
										}
									>
										Facebook
									</Typography>{" "}
									<Typography
										variant="small"
										color="neutral.b100"
										onClick={() =>
											window.open("https://www.instagram.com/panoramamas/")
										}
									>
										Instagram
									</Typography>
									<Typography
										variant="small"
										color="neutral.b100"
										onClick={() =>
											window.open("https://twitter.com/panoramamas")
										}
									>
										Twitter
									</Typography>
								</div>
							</Grid>
							<Grid item sm={6} md={6}>
								<div className="frl">
									<Typography
										variant="small"
										color="neutral.b0"
										style={{ paddingBottom: "8px" }}
									>
										Location
									</Typography>
								
									<Typography
										variant="small"
										color="neutral.b50"
										style={{ paddingBottom: "8px" }}
									>
										United States
									</Typography>
									<Typography
										variant="small"
										color="neutral.b100"
									>
								2727 Palomar Road, Celina, Texas 75009, United States of America
									</Typography>
									<br/>
									<Typography
										variant="small"
										color="neutral.b50"
										style={{ paddingBottom: "8px" }}
									>
										Bangladesh
									</Typography>
									<Typography
										variant="small"
										color="neutral.b100"
									>
									Apartment 5/A, House 8/A, Road 04, DOHS Banani, Dhaka Cantonment, 1206, Bangladesh
									</Typography>
								</div>
							</Grid>
						</Grid>

						<div className="cpr">
							<Typography variant="small" color="neutral.b0">
							 Copyright 2024 © Panorama Management Advisory Services
							</Typography>
						</div>
					</div>
					
				</div>
				
			</Container>
			<div className="ssl">
<img src="/banner.jpg" style={{width:'100%'}}></img>
						</div>
		</div>
	);
}
