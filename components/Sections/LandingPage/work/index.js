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
    initialSlide: 1,
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
          initialSlide: 3,
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
          initialSlide: 2.8,
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
          initialSlide: 2.5,
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
          initialSlide: 2.2,
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
          initialSlide: 2,
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
          initialSlide: 1.9,
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
          initialSlide: 1.5,
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
          initialSlide: 1.2,
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
          <Grid xs={12} sm={12} md={12}>
            <div className="caro">
              <Slider ref={slider} {...settings}>
{WorkData.map((e)=>{
	return <CardWork name={e.name} desc={e.desc} key={e.id}/>
})}
              </Slider>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
