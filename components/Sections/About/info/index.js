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
                  <div style={{cursor:'pointer'}}>
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
              Rise above the competition with Panorama&apos;s tailored business solutions
                </Typography>
                <br/>
                <br/>
              <Typography variant="h3R" color="neutral.b900">
              Unleash your maximum potential through our personalized assessments, meticulous analysis, and unwavering support. By capitalizing on these resources, you can proactively stay ahead of the curve and successfully accomplish your objectives. Our dedication to your continuous learning and development ensures that you remain equipped with the latest knowledge and skills necessary for sustained growth and success. With our comprehensive approach, we are committed to empowering you to reach new heights in your personal and professional journey.
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
                  Empowering individuals and fostering collective growth to turn dreams into reality.
                  <br/>
                  <br/>
We firmly believe in the trans-formative power of data, which has the ability to initiate change, unlock new opportunities, and drive businesses toward success. With this conviction, we are dedicated to equipping our clients with the necessary resources and intelligence to make well-informed decisions.
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
<br/>
                  <br/>
Our mission goes beyond mere surface-level solutions. We are committed to addressing emerging obstacles, tackling complex business problems, and achieving sustainable outcomes. By harnessing the valuable insights provided by data, we empower organizations to optimize their performance, reduce costs, and enhance overall efficiency.
<br/>
                  <br/>
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
