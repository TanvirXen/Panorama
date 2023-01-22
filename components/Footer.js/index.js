import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
export default function Footer() {
	return (
		<div className="footer">
			<Container maxWidth="xl">
				<div className="foot">
					<div className="flogo">
						<div>
							<img src="logoBlack.svg" alt="" srcset="" />
						</div>
						<div>
							<Typography variant="small" color="neutral.b200">
								Enabling and Empowering individuals to achieve their dreams.
								<br />
								<br />
								Redefining the current business process through data-driven
								solutions to solve emerging challenges. Providing sustainable,
								user-centric, and comprehensive global solutions.
							</Typography>
						</div>

						<div>
							<Typography variant="small" color="neutral.b200">
								Copyright 2022 Panorama Advisory
							</Typography>
						</div>
					</div>
					<div className="ftext">
						<Grid container spacing={2}>
							<Grid item sm={4} md={4}>
								<div className="frl">
									<Typography
										variant="small"
										color="neutral.b0"
										style={{ paddingBottom: "8px" }}
									>
										Assesment
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Business Assesment
									</Typography>
								</div>
								<div className="frl">
									<Typography
										variant="small"
										color="neutral.b0"
										style={{ paddingBottom: "8px" }}
									>
										Solutions
									</Typography>
									<Typography variant="small" color="neutral.b200">
										B2B Platform
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Fractional CFO
									</Typography>
								</div>
								<div className="frl">
									<Typography
										variant="small"
										color="neutral.b0"
										style={{ paddingBottom: "8px" }}
									>
										Socials
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Facebook
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Linkedin
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Twitter
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Instagram
									</Typography>
								</div>
							</Grid>
							<Grid item sm={4} md={4}>
								<div className="frl">
									<Typography
										variant="small"
										color="neutral.b0"
										style={{ paddingBottom: "8px" }}
									>
										Consulting
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Training
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Research
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Consulting
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Documentation
									</Typography>
								</div>
								<div className="frl">
									<Typography
										variant="small"
										color="neutral.b0"
										style={{ paddingBottom: "8px" }}
									>
										Capital
									</Typography>
									<Typography variant="small" color="neutral.b200">
										VC Network
									</Typography>
								</div>
							</Grid>
							<Grid item sm={4} md={4}>
								<div className="frl">
									<Typography
										variant="small"
										color="neutral.b0"
										style={{ paddingBottom: "8px" }}
									>
										Resources
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Blogs
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Courses
									</Typography>{" "}
									<Typography variant="small" color="neutral.b200">
										Research
									</Typography>
								</div>
                <div className="frl">
									<Typography
										variant="small"
										color="neutral.b0"
										style={{ paddingBottom: "8px" }}
									>
										Company
									</Typography>
									<Typography variant="small" color="neutral.b200">
										About
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Careers
									</Typography>
								</div>
							</Grid>
						</Grid>
					</div>
				</div>
			</Container>
		</div>
	);
}
