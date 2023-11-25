import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from 'react-type-animation';
export default function Business() {
	return (
		<div>
			<Container maxWidth="xl">
				<Grid container spacing={0} style={{paddingBottom:'100px'}}>
					<Grid md={10}>
						<div className="trst">
						<TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'What if there was a website dedicated to solving your business problems?',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'What if you had a platform to assess and optimize your business at your fingertips?',
        1000,
        'What if your business consultant could be easily reached anytime, anywhere?',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3.4em', display: 'inline-block' }}
      repeat={Infinity}
    />

							<div>
								<Typography variant="large" color="neutral.b200">
								Identifying problems within businesses can be a burdensome and time-consuming undertaking, often resulting in significant costs and impeding timely resolution of the issues at hand.
								</Typography>
							</div>
						</div>
					</Grid>
					<Grid md={2}></Grid>

					<Grid md={12} lg={4}>
						<div className="pdfs">
							<img src="polygon.svg" alt="" />
							<div>
								<Typography variant="large" color="neutral.b800">
								Solve your Business Problems
								</Typography>
							</div>

							<br />
							<div>
								<Typography variant="small" color="neutral.b200">
								Overcome your business challenges with ease: Harness the expertise of our skilled consultants and access our exceptional services for a seamless resolution. Start unlocking growth and achieving unprecedented success today.
								</Typography>
							</div>
						</div>
					</Grid>
					<Grid xs={12} sm={12} md={12} lg={4} >
                    <div className="pdfs">
					<img src="shot.svg" alt="" />
				
							<div>
								<Typography variant="large" color="neutral.b800">
								Understand your Business

								</Typography>
							</div>

							<br />
							<div>
								<Typography variant="small" color="neutral.b200">
								Achieve business success by gaining a deep understanding of your organization through our assessment. Our comprehensive approach will provide you with clarity and help you prioritize the key areas essential for growth and achievement.

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
								Seize control of your future by turning your dreams into reality with our expert assessment and consultancy services. Empower yourself to take charge and confidently pursue your aspirations.
								</Typography>
							</div>
						</div>
                    </Grid>
				</Grid>
			</Container>
		</div>
	);
}
