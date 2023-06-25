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
              The process we follow for Business Consultation
              </Typography>
            </div>
            <div style={{ paddingTop: "24px" }}>
              <Typography variant="large" color="neutral.b200">
              Recognizing the distinctiveness of each business, we customize our services to perfectly align with your
 specific requirements. With our guidance and support, you can attain enduring success in the long run.
              </Typography>
            </div>
          </Grid>
          <Grid md={4}></Grid>

          <Grid md={12} lg={4}>
            <div className="pdfs">
            <img src="c1.png" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Initial Assessment
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Our team of consultants conducts thorough financial analysis, identifying areas that can be enhanced, and ensuring that our services are tailored to align with your specific business objectives.
                </Typography>
              </div>
            </div>
          </Grid>          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="c2.png" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Implementation
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                By collaborating closely with you, we will ensure that the plan is customized to match your goals and is designed in a way that facilitates seamless execution.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="c3.png" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                Ongoing Support
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                With continuous support and regular progress tracking, we will ensure that your business stays on course and achieves its goals as planned.
                </Typography>
              </div>
            </div>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}
