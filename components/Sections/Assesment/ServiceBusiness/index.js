import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function ServiceBusinessAssesment() {
  return (
    <div className="serveBus">
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid md={8}>
            <div className="trsty">
              <Typography variant="small" color="neutral.b50">
                PROCESS
              </Typography>
            </div>
            <div>
              <Typography variant="h1R" color="neutral.b900">
              Our Process for Business Assessment
              </Typography>
            </div>
            <div style={{ paddingTop: "24px" }}>
              <Typography variant="large" color="neutral.b200">
              Diagnosing what is wrong with businesses is expensive, time-sensitive, and hectic which stands in the way to solve the problems you are facing.
              </Typography>
            </div>
          </Grid>
          <Grid md={4}></Grid>

          <Grid md={12} lg={4}>
            <div className="pdfs">
            <img src="initial.svg" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Initial Assessment
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Gain valuable insights on your company and unlock the full potential of your business with our tailored assessments.
                </Typography>
              </div>
            </div>
          </Grid>          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="report.svg" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Our Report
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Uncover Your Business' Areas of Improvement with Our Customized Reports.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="spider.svg" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Get Connected
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Connect with our expert consultants and find solutions for your business challenges.
                </Typography>
              </div>
            </div>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}
