import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import Grid from "@mui/material/Grid";
export default function LearnMoreAssesment() {
  return (
    <div className="LearnMoreAssesment">
      <Container maxWidth="xl">
      <div className="trsty">
              <Typography variant="small" color="neutral.b50">
               LEARN MORE
              </Typography>
            </div>
        <div className="overText">
          <div></div>
          <div>
            <Typography variant="h1R" color="neutral.b900">
            Ease your burden with our support - never tackle business challenges alone again.
            </Typography>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <Typography variant="large" color="neutral.b200">
            Unwind and focus on your business goals - our support has got you covered. Say goodbye to the overwhelming stress and unpredictability of managing a business on your own.
            </Typography>
          </div>
        </div>
        <div style={{ paddingTop: "60px" }}>
          <Grid container spacing={0} style={{ paddingBottom: "100px" }}>
            <Grid xs={12} sm={12} md={12} lg={8}>
              <img src="assesmentLearnMore.png" alt="" style={{ width: "100%" }} />
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={4}>
<div className="growthPadd">
<div style={{  paddingTop:'40px' }}>
                <Typography variant="h4" color="neutral.b800">
                Learn more about our Service providers
                </Typography>
              </div>
              <div style={{ paddingTop:'20px' }}>
                <Typography variant="large" color="neutral.b200">
                Explore the individual ratings and feedback provided by our previous clients.
                </Typography>
              </div>
              <div style={{ paddingTop:'40px' }}>
              <Button kind="primary" size="lg">
                Learn More
                </Button>
              </div>
</div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
