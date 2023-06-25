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
              Our Knowledge Center is a treat for your brain and business
              </Typography>
			  </div>
      
          </Grid>
          <Grid md={4}></Grid>

          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="r1.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Struggling to manage the complex and time-consuming process of project development

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="r2.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Lacking the necessary resources and expertise to effectively complete the project

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="r3.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Facing unforeseen roadblocks and challenges that are causing delays and setbacks
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="r4.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                In need of comprehensive research and documentation to ensure project success


                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="r5.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Overwhelmed by the technical aspects of the project and unsure where to start
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="r6.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Concerned about meeting project goals and delivering exceptional results within budget constraints
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
