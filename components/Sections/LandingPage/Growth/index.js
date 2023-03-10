import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import Grid from "@mui/material/Grid";
export default function Growth() {
  return (
    <div className="growth">
      <Container maxWidth="xl">
        <div className="overText">
          <div></div>
          <div style={{ paddingTop: "8px" }}>
            <Typography variant="h1R" color="neutral.b900">
              Realize your aspirations with Panorama - take control and succeed
            </Typography>
          </div>
          <div style={{ paddingTop: "60px" }}>
            <Typography variant="large" color="neutral.b200">
              Unleash your business potential with our full-spectrum of
              solutions. Get a bird's eye view with our insightful business
              assessment, and accelerate growth with our dynamic consultancy and
              solution services.@ccc
            </Typography>
          </div>
        </div>
        <div style={{ paddingTop: "60px" }}>
          <Grid container spacing={0} style={{ paddingBottom: "100px" }}>
            <Grid xs={12} sm={12} md={12} lg={8}>
              <img src="growth.png" alt="" style={{ width: "100%" }} />
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={4}>
              <div style={{ paddingLeft: "24px" ,paddingTop:'40px' }}>
                <Typography variant="h4" color="neutral.b800">
                We are your partner in growth
                </Typography>
              </div>
              <div style={{ paddingLeft: "24px",paddingTop:'20px' }}>
                <Typography variant="large" color="neutral.b200">
                  Partner with us for unrivaled growth. Our services go beyond
                  just delivering - they're designed to be a steadfast ally on
                  your journey to success. With us by your side, you'll have the
                  unwavering support you need to reach new heights.
                </Typography>
              </div>
              <div style={{ paddingLeft: "24px",paddingTop:'40px' }}>
              <Button kind="primary" size="lg">
                Learn More
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
