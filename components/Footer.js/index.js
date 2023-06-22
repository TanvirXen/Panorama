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
              <Typography variant="small" color="neutral.b100">
               Empowering individuals and fostering collective growth to turn dreams into reality.
                <br />
                <br />
Redefining the current business process through data-driven solutions to solve emerging challenges. Providing sustainable,user-centric,and comprehensive global solutions.
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
                  <Typography variant="small" color="neutral.b100">
                    Past Services
                  </Typography>
                  <Typography variant="small" color="neutral.b100">
                    Knowledge Hub
                  </Typography>{" "}
                  <Typography variant="small" color="neutral.b100">
                    Templates
                  </Typography>
                  <Typography variant="small" color="neutral.b100">
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
                  <Typography variant="small" color="neutral.b100">
                    Starter
                  </Typography>
                  <Typography variant="small" color="neutral.b100">
                    Basic
                  </Typography>{" "}
                  <Typography variant="small" color="neutral.b100">
                    Standard
                  </Typography>
                  <Typography variant="small" color="neutral.b100">
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
                  <Typography variant="small" color="neutral.b100">
                    About Us
                  </Typography>
                  <Typography variant="small" color="neutral.b100">
                    Blog
                  </Typography>{" "}
                  <Typography variant="small" color="neutral.b100">
                    Partnership
                  </Typography>
                  <Typography variant="small" color="neutral.b100">
                    Careers
                  </Typography>
                  <Typography variant="small" color="neutral.b100">
                    Publications
                  </Typography>
                  <Typography variant="small" color="neutral.b100">
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
                  <Typography variant="small" color="neutral.b100" onClick={()=>window.open("https://www.linkedin.com/company/panoramamas/")}>
                    Linkedin
                  </Typography>
                  <Typography variant="small" color="neutral.b100" onClick={()=>window.open("https://www.facebook.com/panoramamas")}>
                    Facebook
                  </Typography>{" "}
                  <Typography variant="small" color="neutral.b100" onClick={()=>window.open("https://www.instagram.com/panoramamas/")}>
                    Instagram
                  </Typography>
                  <Typography variant="small" color="neutral.b100" onClick={()=>window.open("https://twitter.com/panoramamas")}>
                    Twitter
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <div className="cpr">
              <Typography variant="small" color="neutral.b100">
                Copyright 2023 Panorama Management Advisory Services
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
