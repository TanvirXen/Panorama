import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { TypeAnimation } from 'react-type-animation';
export default function Hero() {
	return (
		<Carousel autoPlay={true} infiniteLoop={true} centerMode={false} interval={7000}>
		<div className="herol1">
			<Container
				maxWidth="xl"
				sx={{
					px: 0,
				}}
			>
				<div className="heros">
					<div className="text">
						<Typography variant="h2" color="neutral.b0">
							Understand, prioritise and identify solutions to your business problems
						</Typography>
						<div className="stext">
							<Typography variant="h4" color="neutral.b10">
								Empowering individuals and fostering 
collective growth to turn dreams into reality.
							</Typography>
						</div>
					</div>
				</div>
			</Container>
		</div>
		<div className="herol2">
			<Container
				maxWidth="xl"
				sx={{
					px: 0,
				}}
			>
				<div className="heros">
					<div className="text">
						<Typography variant="h2" color="neutral.b0">
							Understand your business essentials better with our comprehensive assessment.
						</Typography>
						<div className="stext">
							<Typography variant="h4" color="neutral.b10">
Resolve the heart of your business by utilizing our Comprehensive Assessment, which unveils your essential business components.

							</Typography>
						</div>
					</div>
				</div>
			</Container>
		</div>
		<div className="herol3">
			<Container
				maxWidth="xl"
				sx={{
					px: 0,
				}}
			>
				<div className="heros">
					<div className="text">
						<Typography variant="h2" color="neutral.b0">
						Get started  on a path towards achieving business success by joining us.
						</Typography>
						<div className="stext">
							<Typography variant="h4B" color="neutral.b10">
			In the world of business, partnerships crafted by professionals 
are the cornerstone of triumph.
							</Typography>
						</div>
					</div>
				</div>
			</Container>
		</div>
		<div className="herol4">
			<Container
				maxWidth="xl"
				sx={{
					px: 0,
				}}
			>
				<div className="heros">
					<div className="text">
						<Typography variant="h2" color="neutral.b0">
							Unlock the full potential of your business with our  consulting services
						</Typography>
						<div className="stext">
							<Typography variant="h4" color="neutral.b10">
					Unlock Insights, Elevate Business: Dive Deep with Our 
Comprehensive Assessment.
							</Typography>
						</div>
					</div>
				</div>
			</Container>
		</div>
		<div className="herol5">
			<Container
				maxWidth="xl"
				sx={{
					px: 0,
				}}
			>
				<div className="heros">
					<div className="text">
						<Typography variant="h2" color="neutral.b0">
						Find your perfect match for your business using Panorama services.
						</Typography>
						<div className="stext">
							<Typography variant="h4" color="neutral.b10">
							Navigate the realm of entrepreneurship with confidence, knowing that professionals are sculpting your path to the perfect business partner.
							</Typography>
						</div>
					</div>
				</div>
			</Container>
		</div>
		<div className="herol6">
			<Container
				maxWidth="xl"
				sx={{
					px: 0,
				}}
			>
				<div className="heros">
					<div className="text">
						<Typography variant="h2" color="neutral.b0">
						Get access to high level financial insights and strategies
						</Typography>
						<div className="stext">
							<Typography variant="h4" color="neutral.b10">
							Uncontrolled expenditure of modest sums can gradually 
destroy your financial resources over a period.

							</Typography>
						</div>
					</div>
				</div>
			</Container>
		</div>
	</Carousel>
	);
}
