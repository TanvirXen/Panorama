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
              Identifying issues within businesses can be costly, time-consuming, and stressful, creating obstacles to effectively resolving the challenges you are encountering.
              </Typography>
            </div>
          </Grid>
          <Grid md={4}></Grid>

          <Grid md={12} lg={4}>
            <div className="pdfs">
            <img src="as1.png" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Initial Assessment
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Unlock the full potential of your business by gaining valuable insights through our customized assessments, enabling you to understand your company better and make informed decisions.
                </Typography>
              </div>
            </div>
          </Grid>          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="as2.png" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Our Report
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Discover areas of improvement within your business through our customized reports, providing valuable insights to enhance your operations and drive growth.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="as3.png" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Get Connected
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Engage with our team of expert consultants and discover tailored solutions to address your specific business challenges.
                </Typography>
              </div>
            </div>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}
