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
                  Panorama strives to create a sustainable impact while
                  delivering solutions to you
                </Typography>
                <div className="btrn">
                  <div style={{ cursor: "pointer" }} onClick={()=>window.open("https://panoramamas.com/Panorama_company_profile.pdf")} >
                    <Typography variant="xsmall" color="primary.b300">
                      Download Company Profile
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid sm={12} md={6} lg={7}>
              <div className="xrd">
                <Typography variant="large" color="neutral.b900">
                Elevate your market presence with Panorama&apos;s custom business solutions, surpassing competitors.

   
                  <br />
                  <br />
                  Unlock your full potential through personalized assessments, deep analysis, and steadfast support.
Outpace industry trends, proactively achieve goals, and secure long-term success. Our commitment to
ongoing learning ensures up-to-date skills for sustainable expansion. Empower yourself with a holistic
approach, reaching unprecedented milestones in both personal and professional endeavors.
                </Typography>
                {/* <Typography variant="h2R" color="neutral.b900">
              Rise above the competition with Panorama&apos;s tailored business solutions
                </Typography> */}
                <br />
                <br />
                {/* <Typography variant="h3R" color="neutral.b900">
              Unleash your maximum potential through our personalized assessments, meticulous analysis, and unwavering support. By capitalizing on these resources, you can proactively stay ahead of the curve and successfully accomplish your objectives. Our dedication to your continuous learning and development ensures that you remain equipped with the latest knowledge and skills necessary for sustained growth and success. With our comprehensive approach, we are committed to empowering you to reach new heights in your personal and professional journey.
                </Typography> */}
              </div>
              {/* <div className="xcd">
                <Typography variant="large" color="neutral.b900">
                Unlock your full potential with our tailored assessments, analysis, and unwavering support. Stay ahead of the curve and achieve your goals with our commitment to your continuous learning and development.
                </Typography>
              </div> */}
              <div>
                <div className="pdsa">
                  <Typography variant="h4" color="neutral.b50">
                    Our Vision
                  </Typography>
                </div>
                <div>
                  <Typography variant="large" color="neutral.b900">
                  “Empowering individuals and fostering collective growth to turn dreams into reality.”
                    <br />
                    <br />
                    At our core, we believe in the transformative power of data to drive success. Committed to empowering
clients, we provide essential tools for informed decision-making.

                    <br />
                    <br />
                    Beyond quick fixes, our vision involves addressing challenges, solving complex problems, and achieving
sustainable outcomes. By leveraging data insights, we empower organizations to optimize performance,
cut costs, and enhance efficiency.
                  </Typography>
                </div>
              </div>
              <div className="pdsa">
                <div>
                  <Typography variant="h4" color="neutral.b50">
                    Our Mission
                  </Typography>
                </div>
                <div>
                  <Typography variant="large" color="neutral.b900">
                  “Transforming current business processes with data-driven solutions to tackle emerging challenges. Our
dedication lies in delivering sustainable, user-centric, and comprehensive global solutions.”
                    <br />
                    <br />
                    At Panorama, our mission is crystal clear: revolutionize traditional business practices through data-driven
solutions. Fueled by a deep understanding of global business challenges, we deliver innovative,
user-centric, and comprehensive solutions.

                    <br />
                    <br />
                    We firmly believe in data&apos;s transformative potential to unlock opportunities and drive success. Our
commitment extends beyond surface-level fixes, addressing emerging obstacles and achieving
sustainable outcomes by empowering organizations with valuable data insights to optimize performance
and enhance efficiency.

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
