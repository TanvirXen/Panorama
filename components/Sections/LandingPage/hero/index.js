import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
export default function Hero() {
  return (
    <div className="herol">
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid md={8}>
            <div className="trst">
              <Typography variant="h1" color="neutral.b900">
                Understand, prioritise and find solutions to your problems
              </Typography>
            </div>
          </Grid>
          <Grid md={4}>
            <div className="rightd">
              <Button kind="primary" size="md">
                Get Started
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className="heros">
        <img src="heros.png" alt="" />
      </div>
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid md={8}>
            <div className="trst">
              <Typography variant="h4" color="neutral.b900">
                Unlock your full potential and turn your dreams into reality
                with the expert support of Panorama.
                <br />
                <br />
                Let us be your guiding light, empowering you to reach new
                heights and achieve success beyond your dreams.
              </Typography>
              <div className="btmd">
                <Button kind="primary" size="md">
                  Get Started
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
