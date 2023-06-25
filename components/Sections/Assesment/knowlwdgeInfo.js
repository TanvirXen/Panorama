import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function KnowledgeInfoAssesment() {
  return (
    <div className="serveBusKnowledges">
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
              <img src="a1.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Are you interested in pinpointing areas for improvement within your business?

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="a2.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Are you seeking an unbiased, data-driven assessment of your business?

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="a3.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
               

Are you experiencing difficulty in identifying the areas where your business might be lacking or falling short?
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="a4.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Concerned about the potential oversight of crucial business indicators?
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="a5.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Prepared to make well-informed choices to propel business expansion?

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="a6.png" alt="" />
              <br />
              <div>
                <Typography variant="large" color="neutral.b200">
                Desire to maintain a competitive edge in the market?
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
