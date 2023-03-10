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
							Launch with confidence, we've got your back
							</Typography>

							<div>
								<Typography variant="large" color="neutral.b200">
								Take the reins of your business with ease. From financial planning to employee engagement, our expertise will steer you towards a successful future.
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
								Understand your business and reach success with our comprehensive assessment. Gain clarity and focus on the areas that matter most.
								</Typography>
							</div>
						</div>
					</Grid>
					<Grid xs={12} sm={12} md={12} lg={4} >
                    <div className="pdfs">
					<img src="shot.svg" alt="" />
				
							<div>
								<Typography variant="large" color="neutral.b800">
								Solve your Business Problems
								</Typography>
							</div>

							<br />
							<div>
								<Typography variant="small" color="neutral.b200">
								Effortlessly solve your business problems with our expert consultants and top-notch services. Experience growth and success, today.
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
								Achieve your dreams with our expert assessment and consultancy. Take charge and make them a reality.
								</Typography>
							</div>
						</div>
                    </Grid>
				</Grid>
			</Container>
		</div>
	);
}
