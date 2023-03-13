import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function KnowledgeInfo() {
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
              We are here to help you figure out your problems
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
                Are you struggling to take your business to the next level?

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
                Do you need expert advice to reach your business goals?
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
                Are you  unable to focus on long-term strategic planning?
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
                Feeling overwhelmed with the daily operations of your business?

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
                Ready to streamline processes and boost efficiency?

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
                Looking for a long-term partner in business growth?
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
