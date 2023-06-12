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
              The process we follow for Service
              </Typography>
            </div>
            <div style={{ paddingTop: "24px" }}>
              <Typography variant="large" color="neutral.b200">
              Discover Trusted Service Providers for Your Business
              </Typography>
            </div>
          </Grid>
          <Grid md={4}></Grid>

          <Grid md={12} lg={4}>
            <div className="pdfs">
            <img src="sera.png" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Identify
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Assess Your Business Needs. Pinpoint exactly what your business requires to succeed with our expert assessments and consultations.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="serb.png" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Get connected
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Discover Expert Service Providers: Whether you need assistance in finance, marketing, or branding, we can connect you with the perfect professionals to propel your business towards success.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
            <img src="serc.png" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Ongoing Support
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Experience Transformational Support: Our  service providers not only offer solutions, but also will remain by your side throughout your trans-formative journey.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
