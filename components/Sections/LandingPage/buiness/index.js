import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Business() {
	return (
		<div>
			<Container maxWidth="xl">
				<Grid container spacing={0} style={{paddingBottom:'100px'}}>
					<Grid md={8}>
						<div className="trst">
							<Typography variant="h1R" color="neutral.b900">
							Launch with confidence

							</Typography>

							<div>
								<Typography variant="large" color="neutral.b200">
								Every Step of the way, from financial planning to employee engagement, we have got your back. 

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
								Understand your Business
								</Typography>
							</div>

							<br />
							<div>
								<Typography variant="small" color="neutral.b200">
								Gain clarity and refurbish your focus on the areas that matter most.

								</Typography>
							</div>
						</div>
					</Grid>
					<Grid xs={12} sm={12} md={12} lg={4} >
                    <div className="pdfs">
					<img src="shot.svg" alt="" />
				
							<div>
								<Typography variant="large" color="neutral.b800">
								Formulate effective, durable, and easy solutions to your problems.

								</Typography>
							</div>

							<br />
							<div>
								<Typography variant="small" color="neutral.b200">
								Formulate effective, durable, and easy solutions to your problems.


								</Typography>
							</div>
						</div>
                    </Grid>
					<Grid md={12} lg={4}>
                    <div className="pdfs">
					<img src="arw.svg" alt="" />
							<div>
								<Typography variant="large" color="neutral.b800">
								Take charge of your Future
								</Typography>
							</div>

							<br />
							<div>
								<Typography variant="small" color="neutral.b200">
								Plan ahead and steer towards the future you envisioned 

								</Typography>
							</div>
						</div>
                    </Grid>
				</Grid>
			</Container>
		</div>
	);
}
