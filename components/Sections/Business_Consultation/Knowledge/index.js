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
              Our purpose is to assist you in resolving any challenges you may be facing.
              </Typography>
			  </div>
      
          </Grid>
          <Grid md={4}></Grid>

          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="ck1.png" alt="" />

              <br />
              <div className="desc">
                <Typography variant="large" color="neutral.b200">
                Are you finding it difficult to elevate your business to the next level?
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
            <img src="ck2.png" alt="" />
     

              <br />
              <div className="desc">
                <Typography variant="large" color="neutral.b200">
                Are you seeking professional guidance to achieve your business objectives?
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="ck3.png" alt="" />

              <br />
              <div className="desc">
                <Typography variant="large" color="neutral.b200">
                Do you find it challenging to allocate your attention to long-term strategic planning?
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="ck4.png" alt="" />

              <br />
              <div className="desc">
                <Typography variant="large" color="neutral.b200">
                Do you feel overwhelmed by the day-to-day operations of your business?

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
            <img src="ck5.png" alt="" />
     

              <br />
              <div className="desc">
                <Typography variant="large" color="neutral.b200">
                Are you prepared to optimize your processes and enhance overall efficiency?


                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="ck6.png" alt="" />

              <br />
              <div className="desc">
                <Typography variant="large" color="neutral.b200">
                Are you in search of a reliable, long-term partner to support your business growth?

                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
