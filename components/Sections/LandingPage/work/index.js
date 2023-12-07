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
import CardWork from "./CardWork";
import WorkData from "./WorkData";
export default function Work() {
  const [load, setload] = useState("");
  const slider = useRef(null);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.6,
    slidesToScroll: 1,
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
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 985,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 2.8,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 807,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 2.2,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1.9,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 634,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 484,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 404,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 1,
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
                Empower your business with Panorama's expertise. As trusted partners for corporations, startups, SMEs, venture capitalists, and government entities, we provide valuable insights, drive growth, and guide you to remarkable success through expert assessments and consulting.
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
          <Grid xs={12} sm={12} md={12}>
            <div className="caro">
              <Slider ref={slider} {...settings}>
{WorkData.map((e)=>{
	return <CardWork name={e.name} desc={e.desc} url={e.url} key={e.id}/>
})}
              </Slider>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
