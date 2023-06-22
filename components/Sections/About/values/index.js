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
                Conducting diagnosing of your businesses is expensive, time-sensitive, and hectic which stands in the way to solve the problems you are facing, but we are here to assist.

                </Typography>
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={4} lg={5}></Grid>


            <Grid xs={12} sm={6} md={6} lg={3} xl={3} style={{paddingRight:'16px',paddingTop:'16px'}}>
              <div className="coreCard">
                <div className="crs">
                    <div >
                    <Typography variant="h4" color="neutral.b0">
                    Integrity
                  </Typography>
                    </div>
         
                  <div className="vbr">
                    <Typography variant="small" color="neutral.b0">
                    Integrity is of utmost importance to us. We strive to uphold the highest ethical standards in every aspect of our business operations. This includes being honest, transparent, and accountable in all our interactions with clients, partners, and stakeholders.

                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={3} xl={3} style={{paddingRight:'16px',paddingTop:'16px'}}>
              <div className="coreCard">
                <div className="crs">
                    <div >
                    <Typography variant="h4" color="neutral.b0">
                    Learning and Adaptability
                  </Typography>
                    </div>
         
                  <div className="vbr">
                    <Typography variant="small" color="neutral.b0">
                    Learning and adaptability are key aspects of our approach. We believe in continuously seeking knowledge, embracing new ideas, and adapting to changing circumstances. By fostering a culture of learning and adaptability, we ensure that we stay at the forefront of industry trends, technological advancements, and best practices. This enables us to consistently improve and refine our offerings to better serve our clients' evolving needs.
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={3} xl={3} style={{paddingRight:'16px',paddingTop:'16px'}}>
              <div className="coreCard">
                <div className="crs">
                    <div>
                    <Typography variant="h4" color="neutral.b0">
                    Collaborative Relationships
                  </Typography>
                    </div>
         
                  <div className="vbr">
                    <Typography variant="small" color="neutral.b0">
                    
Collaborative relationships are essential to our success. We value the power of collaboration and actively seek to build strong and mutually beneficial partnerships with our clients, as well as with other organizations and experts in our field. By working together, we can leverage collective expertise and resources to achieve remarkable outcomes for our clients and communities.
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={3} xl={3} style={{paddingRight:'16px',paddingTop:'16px'}}>
              <div className="coreCard">
                <div className="crs">
                    <div >
                    <Typography variant="h4" color="neutral.b0">
                    Ingenuity
                  </Typography>
                    </div>
         
                  <div className="vbr">
                    <Typography variant="small" color="neutral.b0">
                    Ingenuity is a driving force behind our innovation and growth. We encourage creativity, originality, and a forward-thinking mindset within our team. By fostering an environment that encourages and rewards ingenuity, we are able to generate innovative solutions and approaches that deliver exceptional value to our clients.
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
