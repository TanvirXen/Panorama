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
        'Imagine a website designed to help you achieve your business goals.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Imagine a website poised to unleash the full potential of your business.',
        1000,
        'Imagine a website capable of identifying the challenges facing your business.',
        1000,
		'Imagine a website dedicated to assisting you in gaining leadership alignment.',
        1000,
		'Imagine a website that facilitates visualizing the untapped potential of your business.',
        1000,
		'Imagine a website capable of conducting a thorough assessment of your business status.',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3.4em', display: 'inline-block' }}
      repeat={Infinity}
    />

							<div>
								<Typography variant="large" color="neutral.b200">
								Identifying  issues within businesses is an exhausting and time-intensive task, filled with substantial costs that hinder the prompt resolution of pressing challenges.
								</Typography>
							</div>
						</div>
					</Grid>
					<Grid md={2}></Grid>

					<Grid md={12} lg={4}>
						<div className="pdfs">
							<img src="polygon.svg" alt="" />
							<div>
								<Typography variant="largeB" color="neutral.b800">
								Solve your Business Problems
								</Typography>
							</div>

							<br />
							<div>
								<Typography variant="small" color="neutral.b200">
								Overcome your business challenges effortlessly with our expert consultants and exceptional services,
unlocking growth and achieving unprecedented success.

								</Typography>
							</div>
						</div>
					</Grid>
					<Grid xs={12} sm={12} md={12} lg={4} >
                    <div className="pdfs">
					<img src="shot.svg" alt="" />
				
							<div>
								<Typography variant="largeB" color="neutral.b800">
								Understand your Business

								</Typography>
							</div>

							<br />
							<div>
								<Typography variant="small" color="neutral.b200">
								Attain business success through our assessment, gaining clarity and prioritizing key areas for growth and
achievement.
								</Typography>
							</div>
						</div>
                    </Grid>
					<Grid md={12} lg={4}>
                    <div className="pdfs">
					<img src="arw.svg" alt="" />
							<div>
								<Typography variant="largeB" color="neutral.b800">
								Take charge of your Future
								</Typography>
							</div>

							<br />
							<div>
								<Typography variant="small" color="neutral.b200">
								Seize control of your future by turning your dreams into reality with our expert assessment and
consultancy services. Empower yourself to take charge and confidently pursue your aspirations.
								</Typography>
							</div>
						</div>
                    </Grid>
				</Grid>
			</Container>
		</div>
	);
}
