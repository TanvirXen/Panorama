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
              We are here to help you figure out your finance
              </Typography>
			  </div>
      
          </Grid>
          <Grid md={4}></Grid>

          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="f1.svg" alt="" />

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Do you need a financial expert for your business, but don&apos;t want to commit to a full-time hire?
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
            <img src="f2.svg" alt="" />
     

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Struggling with financial management and planning?
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="f3.svg" alt="" />

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Do you lack the expertise to effectively manage your business finances?
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="f4.png" alt="" />

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Looking for a cost-effective solution for your business financial needs?
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
            <img src="f5.svg" alt="" />
     

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Do you want to minimize risk and maximize profitability?

                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="f6.svg" alt="" />

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Need someone to help guide your financial decisions?
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
