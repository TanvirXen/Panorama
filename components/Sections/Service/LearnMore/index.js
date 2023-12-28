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
            Empower Your Business with Tailored Insights and Solutions
            </Typography>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <Typography variant="large" color="neutral.b200">
            Identifying and addressing issues within businesses can be a costly, time-sensitive, and demanding process, which can impede the resolution of the problems you are facing.
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
                Learn more about our business assessment
                </Typography>
              </div>
              <div style={{ paddingTop:'20px' }}>
                <Typography variant="large" color="neutral.b200">
                Identifying and addressing issues within businesses can present challenges due to the associated costs, time constraints, and demanding nature of the process. These factors can potentially hinder the timely resolution of the problems you are currently facing.
                </Typography>
              </div>
              <div style={{ paddingTop:'40px' }}>
              <Button kind="primary" size="lg" onClick={() => window.open("https://test.agsmcs.info/")}>
                 Try Now
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
