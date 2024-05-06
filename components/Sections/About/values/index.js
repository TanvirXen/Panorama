import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";

export default function Values() {
  return (
    <div className="abtValues">
      <div>
        <Container maxWidth="xl">
          <Grid
            container
            style={{ paddingTop: "100px", paddingBottom: "100px" }}
          >
            <Grid xs={12} sm={12} md={12} lg={12}>
              <div>
                <Typography variant="h1R" color="neutral.b900">
                  Our Core Values
                </Typography>
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={8} lg={7}>
              <div style={{ paddingTop: "24px", paddingBottom: "24px" }}>
                <Typography variant="large" color="neutral.b200">
                Conducting a business diagnosis is costly, time-sensitive, and challenging. We&apos;re here to assist you in
overcoming these obstacles.


                </Typography>
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={4} lg={5}></Grid>


            <Grid xs={12} sm={6} md={6} lg={3} xl={3} style={{paddingRight:'16px',paddingTop:'16px'}}>
              <div className="coreCard">
                <div className="crs">
                    <div className="cxz">
                    <Typography variant="h4" color="neutral.b0">
                    Integrity
                  </Typography>
                    </div>
         
                  <div className="vbr">
                    <Typography variant="small" color="neutral.b0">
                    Integrity is foundational. We maintain the highest ethical standards, prioritizing honesty, transparency,
and accountability in all interactions with clients, partners, and stakeholders.

                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={3} xl={3} style={{paddingRight:'16px',paddingTop:'16px'}}>
              <div className="coreCard">
                <div className="crs">
                    <div className="cxz" >
                    <Typography variant="h4" color="neutral.b0">
                    Learning and Adaptability
                  </Typography>
                    </div>
         
                  <div className="vbr">
                    <Typography variant="small" color="neutral.b0">
                    Continuous learning and adaptability drive our approach. We embrace new ideas and stay ahead of
industry trends, technological advancements, and best practices. Fostering a culture of learning enables
us to consistently refine our offerings, ensuring we meet our clients evolving needs.

                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={3} xl={3} style={{paddingRight:'16px',paddingTop:'16px'}}>
              <div className="coreCard">
                <div className="crs">
                    <div className="cxz">
                    <Typography variant="h4" color="neutral.b0">
                    Collaborative Relationships
                  </Typography>
                    </div>
         
                  <div className="vbr">
                    <Typography variant="small" color="neutral.b0">
                    
                    Collaborative relationships are vital to our success. We actively build strong partnerships with clients,
organizations, and experts in our field. By leveraging collective expertise, we achieve remarkable
outcomes for clients and communities.

                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={3} xl={3} style={{paddingRight:'16px',paddingTop:'16px'}}>
              <div className="coreCard">
                <div className="crs">
                    <div className="cxz" >
                    <Typography variant="h4" color="neutral.b0">
                    Ingenuity
                  </Typography>
                    </div>
         
                  <div className="vbr">
                    <Typography variant="small" color="neutral.b0">
                    Ingenuity fuels our innovation and growth. We foster a culture that values creativity, originality, and a
forward-thinking mindset within our team. By encouraging and rewarding ingenuity, we generate
innovative solutions, providing exceptional value to our clients
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
