import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import CareerIcon from "../../../reUse/career";
export default function InfoCompany() {
  return (
    <div className="abtprofile">
      <div className="anb">
        <Container maxWidth="xl">
          <Grid container spacing={0}>
            <Grid sm={12} md={6} lg={5}>
              <div className="cmncard">
                <Typography variant="large" color="neutral.b0">
                Panorama strives to create a sustainable impact while delivering solutions to you
                </Typography>
                <div className="btrn">
                  <div>
                    <Typography variant="xsmall" color="primary.b300">
                      Download Company Profile
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid sm={12} md={6} lg={7}>
              <div className="xrd">
              <Typography variant="h2R" color="neutral.b900">
              Hurdle through your challenges with our custom-tailored assessments, in-depth analysis and unwavering support. 
                </Typography>
              </div>
              {/* <div className="xcd">
                <Typography variant="large" color="neutral.b900">
                Unlock your full potential with our tailored assessments, analysis, and unwavering support. Stay ahead of the curve and achieve your goals with our commitment to your continuous learning and development.
                </Typography>
              </div> */}
              <div>
                <div className="pdsa">
                  <Typography variant="large" color="neutral.b50">
                    Our Vision
                  </Typography>
                </div>
                <div>
                  <Typography variant="h4" color="neutral.b900">
                  Enabling and Empowering to achieve your dreams and grow together with Panorama.
                  </Typography>
                </div>
              </div>
              <div className="pdsa">
                <div>
                  <Typography variant="large" color="neutral.b50">
                    Our Mission
                  </Typography>
                </div>
                <div>
                  <Typography variant="h4" color="neutral.b900">
                  Redefining the current business process through data-driven solutions to solve emerging challenges. Providing sustainable, user-centric, and comprehensive global solutions.

                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
