import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import Grid from "@mui/material/Grid";
export default function LearnMore() {
  return (
    <div className="growth">
      <Container maxWidth="xl">
        <div className="overText">
          <div></div>
          <div style={{ paddingTop: "8px" }}>
            <Typography variant="h1R" color="neutral.b900">
            Comprehensive project support for exceptional results - from innovation to delivery
            </Typography>
          </div>
          <div style={{ paddingTop: "60px" }}>
            <Typography variant="large" color="neutral.b200">
            Comprehensive project support with innovative research, agile development, and tailored solutions for exceptional results.
            </Typography>
          </div>
        </div>
        <div style={{ paddingTop: "60px" }}>
          <Grid container spacing={0} style={{ paddingBottom: "100px" }}>
            <Grid xs={12} sm={12} md={12} lg={8}>
              <img src="learnMoreService.png" alt="" style={{ width: "100%" }} />
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={4}>
<div className="growthPadd">
<div style={{  paddingTop:'40px' }}>
                <Typography variant="h4" color="neutral.b800">
                Innovative research, agile development, tailored solutions.
                </Typography>
              </div>
              <div style={{ paddingTop:'20px' }}>
                <Typography variant="large" color="neutral.b200">
                Learn how to utilize cutting-edge techniques for insightful data and best strategies.
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
