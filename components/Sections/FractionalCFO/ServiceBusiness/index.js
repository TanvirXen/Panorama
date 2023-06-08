import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function ServiceBusiness() {
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
              The process we follow for Fractional CFO Services
              </Typography>
            </div>
            <div style={{ paddingTop: "24px" }}>
              <Typography variant="large" color="neutral.b200">
              Unlock the power of expert financial management with Fractional CFO services. No full-time hire required, just access to the valuable insights and guidance of a Chief Financial Officer.
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
                Tailored to your needs, our assessment analyzes finances, identifies opportunities, and aligns with your goals to elevate your company.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
            <img src="development.svg" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Implementation
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Based on the findings of the initial assessment, we will implement a customized financial management plan tailored just for your business.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="support.svg" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Ongoing Support
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Get ongoing financial support from our Fractional CFOs. Count on us to keep your finances on track and be available for any questions or concerns.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
