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
                From research to delivery, we&apos;re your agile project
                partner.
              </Typography>
            </div>
            <div style={{ paddingTop: "24px" }}>
              <Typography variant="large" color="neutral.b200">
                Thorough research, for project success. Utilizing cutting-edge
                techniques for insightful data and best strategies.
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
                Our consultants analyze financials, pinpoint areas for improvement, and align our services with your business goals. 
                </Typography>
              </div>
            </div>
          </Grid>          <Grid md={12} lg={4}>
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
                Working hand-in-hand with you, we&apos;ll ensure the plan fits your goals and is easy to execute.
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
                With ongoing support and progress tracking, we'll keep your business on track to meet its goals.
                </Typography>
              </div>
            </div>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}
