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
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
					</div>
				</div>
			</div>
		</Container>
	</div>
	);
}
