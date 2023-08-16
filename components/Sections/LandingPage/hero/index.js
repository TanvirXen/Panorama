import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function Hero() {
	return (
		<Carousel autoPlay={true} infiniteLoop={true} centerMode={false}>
			<div className="herol1">
				<Container
					maxWidth="xl"
					sx={{
						px: 0,
					}}
				>
					<div className="heros">
						<div className="text">
							<Typography variant="h1" color="neutral.b0">
								Understand, prioritise and find solutions to your problems
							</Typography>
							<div className="stext">
								<Typography variant="h4" color="neutral.b10">
									Empowering individuals and fostering collective growth to turn
									dreams into reality.
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
							<Typography variant="h1" color="neutral.b0">
								Understand, prioritise and find solutions to your problems
							</Typography>
							<div className="stext">
								<Typography variant="h4" color="neutral.b10">
									Empowering individuals and fostering collective growth to turn
									dreams into reality.
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
							<Typography variant="h1" color="neutral.b0">
								Understand, prioritise and find solutions to your problems
							</Typography>
							<div className="stext">
								<Typography variant="h4" color="neutral.b10">
									Empowering individuals and fostering collective growth to turn
									dreams into reality.
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
							<Typography variant="h1" color="neutral.b0">
								Understand, prioritise and find solutions to your problems
							</Typography>
							<div className="stext">
								<Typography variant="h4" color="neutral.b10">
									Empowering individuals and fostering collective growth to turn
									dreams into reality.
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
							<Typography variant="h1" color="neutral.b0">
								Understand, prioritise and find solutions to your problems
							</Typography>
							<div className="stext">
								<Typography variant="h4" color="neutral.b10">
									Empowering individuals and fostering collective growth to turn
									dreams into reality.
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
							<Typography variant="h1" color="neutral.b0">
								Understand, prioritise and find solutions to your problems
							</Typography>
							<div className="stext">
								<Typography variant="h4" color="neutral.b10">
									Empowering individuals and fostering collective growth to turn
									dreams into reality.
								</Typography>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</Carousel>
	);
}
