import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function ServiceBusiness() {
	return (
		<div className="serveBus">
			<Container maxWidth="xl">
				<Grid container spacing={0}>
					<Grid md={8}>
						<div className="trst">
							<Typography variant="h1R" color="neutral.b900">
								Starting a business can be difficult. But we are here to help.
							</Typography>

							<div>
								<Typography variant="large" color="neutral.b200">
									Diagnosing what is wrong with businesses is expensive,
									time-sensitive, and hectic which stands in the way to solve
									the problems you are facing.
								</Typography>
							</div>
						</div>
					</Grid>
					<Grid md={4}></Grid>

					<Grid md={12} lg={4}>
						<div className="pdfs">
							<img src="polygon.svg" alt="" />
							<div>
								<Typography variant="large" color="neutral.b800">
									Understand your Business Problems
								</Typography>
							</div>

							<br />
							<div>
								<Typography variant="small" color="neutral.b200">
									Diagnosing what is wrong with businesses is expensive,
									time-sensitive, and hectic which stands in the way to solve
									the problems you are facing.
								</Typography>
							</div>
						</div>
					</Grid>
					<Grid md={12} lg={4}>
                    <div className="pdfs">
							<img src="arw.svg" alt="" />
							<div>
								<Typography variant="large" color="neutral.b800">
								Prioritize what to solve to fix your problem
								</Typography>
							</div>

							<br />
							<div>
								<Typography variant="small" color="neutral.b200">
									Diagnosing what is wrong with businesses is expensive,
									time-sensitive, and hectic which stands in the way to solve
									the problems you are facing.
								</Typography>
							</div>
						</div>
                    </Grid>
					<Grid md={12} lg={4}>
                    <div className="pdfs">
							<img src="shot.svg" alt="" />
							<div>
								<Typography variant="large" color="neutral.b800">
                                Solve your root causes and solve problems
								</Typography>
							</div>

							<br />
							<div>
								<Typography variant="small" color="neutral.b200">
									Diagnosing what is wrong with businesses is expensive,
									time-sensitive, and hectic which stands in the way to solve
									the problems you are facing.
								</Typography>
							</div>
						</div>
                    </Grid>
				</Grid>
			</Container>
		</div>
	);
}
