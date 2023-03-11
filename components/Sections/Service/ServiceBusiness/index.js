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
            <div  >
              <Typography variant="h1R" color="neutral.b900">
                From research to delivery, we're your agile project partner.
              </Typography>
			  </div>
              <div style={{paddingTop:'24px'}}>
                <Typography variant="large" color="neutral.b200">
                  Thorough research, for project success. Utilizing cutting-edge
                  techniques for insightful data and best strategies.
                </Typography>
              </div>
      
          </Grid>
          <Grid md={4}></Grid>

          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="researchIcon.svg" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
				Research
                </Typography>
              </div>

              <br />
              <div>
                <Typography variant="small" color="neutral.b200">
				Before diving into the project, we take the time to thoroughly research and analyze the problem at hand. Our team of experts utilizes cutting-edge research techniques to gather relevant data and insights, and to identify the best practices and strategies that will ensure project success.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="documentation.svg" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
				Documentation
                </Typography>
              </div>

              <br />
              <div>
                <Typography variant="small" color="neutral.b200">
				Once we have a deep understanding of the project requirements, we document our findings in a comprehensive and detailed manner. Our documentation includes everything from project plans and timelines to technical specifications and quality assurance procedures. This ensures that everyone involved in the project is on the same page and that there is a clear roadmap for success.

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="development.svg" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
				Development 
                </Typography>
              </div>

              <br />
              <div>
                <Typography variant="small" color="neutral.b200">
				Armed with a solid research foundation and comprehensive documentation, we begin the development phase. We utilize agile development methods to ensure that we are able to adapt to changes in project requirements and respond quickly to feedback. Our team works collaboratively to deliver exceptional results, on time and within budget.

                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
