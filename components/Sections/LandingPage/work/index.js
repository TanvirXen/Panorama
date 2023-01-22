import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LeftArrow from "../../../../components/reUse/LeftArrow";
import RightArrow from "../../../../components/reUse/RightArrow";
import { useState, useCallback, useEffect, useRef } from "react";
import Slider from "react-slick";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Work() {
	const [load, setload] = useState("");
	const slider = useRef(null);
	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 2,
		arrows: false,
		initialSlide: 0,
		centerMode: false,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					dots: false,
					infinite: false,
					speed: 500,
					slidesToShow: 3,
					slidesToScroll: 2,
					arrows: false,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 850,
				settings: {
					dots: false,
					infinite: false,
					speed: 500,
					slidesToShow: 1.8,
					slidesToScroll: 1,
					arrows: false,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 630,
				settings: {
					dots: false,
					infinite: false,
					speed: 500,
					slidesToShow: 1.3,
					slidesToScroll: 1,
					arrows: false,
					initialSlide: 1.3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					dots: false,
					infinite: false,
					speed: 500,
					slidesToShow: 1.3,
					slidesToScroll: 1,
					arrows: false,
					initialSlide: 1.3,
				},
			},
		],
	};
	return (
		<div className="work">
			<Container maxWidth="xl">
				<Grid container spacing={0}>
					<Grid md={8}>
						<div className="trst">
							<Typography variant="h1R" color="neutral.b900">
								Who we are working with
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
					<Grid md={4}>
						<div className="trstcont">
							<span onClick={() => slider?.current?.slickPrev()}>
								<LeftArrow fx={setload} />
							</span>
							<span onClick={() => slider?.current?.slickNext()}>
								<RightArrow fx={setload} />
							</span>
						</div>
					</Grid>
					<Grid md={12}>
						<div className="caro">
                        <Slider ref={slider} {...settings}>
                        <div className="wcard">
								<div className="inner">
									<div>
										<Typography variant="large" color="neutral.b800">
											SMEs
										</Typography>
									</div>
									<div className="para">
										<Typography variant="small" color="neutral.b200">
											Management consulting is the practice of providing
											consulting services to organizations to improve their
											performance or in any way to assist in achieving
											organizational objectives.
										</Typography>
									</div>
									<div className="btn">
										<Button kind="primary" size="md" className="btnss">
											Learn More
										</Button>
									</div>
								</div>
							</div>
                            <div className="wcard">
								<div className="inner">
									<div>
										<Typography variant="large" color="neutral.b800">
											SMEs
										</Typography>
									</div>
									<div className="para">
										<Typography variant="small" color="neutral.b200">
											Management consulting is the practice of providing
											consulting services to organizations to improve their
											performance or in any way to assist in achieving
											organizational objectives.
										</Typography>
									</div>
									<div className="btn">
										<Button kind="primary" size="md" className="btnss">
											Learn More
										</Button>
									</div>
								</div>
							</div>
                            <div className="wcard">
								<div className="inner">
									<div>
										<Typography variant="large" color="neutral.b800">
											SMEs
										</Typography>
									</div>
									<div className="para">
										<Typography variant="small" color="neutral.b200">
											Management consulting is the practice of providing
											consulting services to organizations to improve their
											performance or in any way to assist in achieving
											organizational objectives.
										</Typography>
									</div>
									<div className="btn">
										<Button kind="primary" size="md" className="btnss">
											Learn More
										</Button>
									</div>
								</div>
							</div>
                            <div className="wcard">
								<div className="inner">
									<div>
										<Typography variant="large" color="neutral.b800">
											SMEs
										</Typography>
									</div>
									<div className="para">
										<Typography variant="small" color="neutral.b200">
											Management consulting is the practice of providing
											consulting services to organizations to improve their
											performance or in any way to assist in achieving
											organizational objectives.
										</Typography>
									</div>
									<div className="btn">
										<Button kind="primary" size="md" className="btnss">
											Learn More
										</Button>
									</div>
								</div>
							</div>
                            <div className="wcard">
								<div className="inner">
									<div>
										<Typography variant="large" color="neutral.b800">
											Startup
										</Typography>
									</div>
									<div className="para">
										<Typography variant="small" color="neutral.b200">
											Management consulting is the practice of providing
											consulting services to organizations to improve their
											performance or in any way to assist in achieving
											organizational objectives.
										</Typography>
									</div>
									<div className="btn">
										<Button kind="primary" size="md" className="btnss">
											Learn More
										</Button>
									</div>
								</div>
							</div>
						
						</Slider>


						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
