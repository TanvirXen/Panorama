import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
export default function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="xl">
        <div className="foot">
          <div className="flogo">
            <div>
              <img src="logoBlack.svg" alt="" srcset="" />
            </div>
            <div>
              <Typography variant="small" color="neutral.b200">
                Enabling and Empowering individuals to achieve their dreams.
                <br />
                <br />
                Redefining the current business process through data-driven
                solutions to solve emerging challenges. Providing sustainable,
                user-centric, and comprehensive global solutions.
              </Typography>
            </div>

            <div>
              <Typography variant="small" color="neutral.b200">
                Copyright 2023 Panorama Management Advisory Services
              </Typography>
            </div>
          </div>
          <div className="ftext">
            <Grid container spacing={2}>
              <Grid item sm={3} md={3}>
                <div className="frl">
                  <Typography
                    variant="small"
                    color="neutral.b0"
                    style={{ paddingBottom: "8px" }}
                  >
                    Resources
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                    Past Services
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                   Knowledge Hub
                  </Typography>{" "}
                  <Typography variant="small" color="neutral.b200">
                   Templates
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                   Publications
                  </Typography>
                </div>

              </Grid>
              <Grid item sm={3} md={3}>
                <div className="frl">
                  <Typography
                    variant="small"
                    color="neutral.b0"
                    style={{ paddingBottom: "8px" }}
                  >
                  Pricing
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                  Starter
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
               Basic
                  </Typography>{" "}
                  <Typography variant="small" color="neutral.b200">
                   Standard
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                   Premium
                  </Typography>
                </div>

              </Grid>
              <Grid item sm={3} md={3}>
                <div className="frl">
                  <Typography
                    variant="small"
                    color="neutral.b0"
                    style={{ paddingBottom: "8px" }}
                  >
                 Company
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                  About Us
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
               Blog
                  </Typography>{" "}
                  <Typography variant="small" color="neutral.b200">
                   Partnership
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                   Careers
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                   Publications
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                   Company Profile
                  </Typography>
                </div>

              </Grid>
              <Grid item sm={3} md={3}>
                <div className="frl">
                  <Typography
                    variant="small"
                    color="neutral.b0"
                    style={{ paddingBottom: "8px" }}
                  >
                Social
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                  Linkedin
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
             Facebook
                  </Typography>{" "}
                  <Typography variant="small" color="neutral.b200">
                  Instagram
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                   Twitter
                  </Typography>
                </div>

              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}
