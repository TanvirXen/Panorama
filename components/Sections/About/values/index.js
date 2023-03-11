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
                    Fostering transparency, straightforwardness, and leading by example.
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={3} xl={3} style={{paddingRight:'16px',paddingTop:'16px'}}>
              <div className="coreCardL">
                <div className="crs">
                    <div >
                    <Typography variant="h4" color="neutral.b0">
                    Learning and Adaptability
                  </Typography>
                    </div>
         
                  <div className="vbr">
                    <Typography variant="small" color="neutral.b0">
                    Continuously acquiring new knowledge and skills, and being flexible and responsive to changing circumstances
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={3} xl={3} style={{paddingRight:'16px',paddingTop:'16px'}}>
              <div className="coreCardR">
                <div className="crs">
                    <div>
                    <Typography variant="h4" color="neutral.b0">
                    Collaborative Relationships
                  </Typography>
                    </div>
         
                  <div className="vbr">
                    <Typography variant="small" color="neutral.b0">
                    Assembling geniuses and building valuable relationships with our people, clients, partners, and planet.
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={3} xl={3} style={{paddingRight:'16px',paddingTop:'16px'}}>
              <div className="coreCardI">
                <div className="crs">
                    <div >
                    <Typography variant="h4" color="neutral.b0">
                    Ingenuity
                  </Typography>
                    </div>
         
                  <div className="vbr">
                    <Typography variant="small" color="neutral.b0">
                    Providing innovative solutions to our clients, by going extra miles to solve their challenges.
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
