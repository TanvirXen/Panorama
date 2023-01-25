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
                Our Company thrives to create a sustainable impact while
                delivering to you.
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
            <div className="xcd">
              <Typography variant="large" color="neutral.b900">
                We do things differently around here.
                <br />
                <br />
                ClearBank was built on the belief that banking
                infrastructure would no longer slow down progress. Instead,
                it would be the catalyst that unlocks the potential to
                innovate. It would adapt to cater to different needs so a
                new era in financial services could begin.
                <br />
                <br />
                We re a fully regulated bank thats driven by the latest
                technology and powered by our talented people.
              </Typography>
            </div>
            <div>
              <div className="pdsa">
                <Typography variant="large" color="neutral.b50">
                  Our Vision
                </Typography>
              </div>
              <div>
                <Typography variant="h4" color="neutral.b900">
                  We re a fully regulated bank thats driven by the latest
                  technology and powered by our talented people.
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
                  We re a fully regulated bank that s driven by the latest
                  technology and powered by our talented people.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  </div>
  )
}
