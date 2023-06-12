import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function KnowledgeInfoAssesment() {
  return (
    <div className="serveBusKnowledge">
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid md={8}>
            <div className="trsty">
              <Typography variant="small" color="neutral.b50">
              IS THIS FOR YOU
              </Typography>
            </div>
            <div  >
              <Typography variant="h1R" color="neutral.b900">
              Our team of service providers is committed to simplifying
 your life and making it more convenient for you
              </Typography>
			  </div>
      
          </Grid>
          <Grid md={4}></Grid>

          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="ser1.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Are you having difficulties in finding the appropriate support to facilitate the growth of your business?

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="ser2.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Are you seeking customized solutions that align with the specific requirements of your business?

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="ser3.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Are you experiencing a sense of stagnation and uncertainty about how to overcome obstacles and progress to the next level?
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="ser4.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Are you seeking dedicated assistance from a knowledgeable professional who is fully dedicated to ensuring your success?


                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="ser5.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Are you facing obstacles in financial management, marketing, and branding that are impeding the progress of your business?
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="ser6.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Are you at a point in your business where you are motivated and determined to propel it forward, surpassing your current achievements and reaching new heights of success?

                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
