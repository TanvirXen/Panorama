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
              Our Service Providers are here to make your life easier
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
                Are you struggling to find the right support for your business growth? 

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
                Do you need tailored solutions to meet your unique business needs?
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
                Are you feeling stuck and unsure of how to break through to the next level?
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
                Looking for expert support that's committed to your success?

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
                Are financial management, marketing, and branding challenges holding your business back?
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
        </Grid>
      </Container>
    </div>
  );
}
