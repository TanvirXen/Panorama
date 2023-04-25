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
              Our business assessment includes comprehensive analysis, catered to you business.
              </Typography>
			  </div>
      
          </Grid>
          <Grid md={4}></Grid>

          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="tick.svg" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Do you want to identify areas for improvement in your business?

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="tick.svg" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Are you looking for an objective, data-driven evaluation of your business?

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="tick.svg" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Are you ready to take your business to the next level?
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="tick.svg" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Worried about missing critical business metrics?


                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="tick.svg" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Ready to make informed decisions to drive growth?

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="tick.svg" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Want to stay ahead of the competition?

                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}