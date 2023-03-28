import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import CareerIcon from "../../../reUse/career";

export default function Career() {
  return (
    <div className="abtprofile">
    <div className="anb">
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid sm={12} md={6} lg={5}>
            <div className="crrs">
              <CareerIcon />
              <div className="btrn">
                <Typography variant="large" color="neutral.b900">
                  Please contact us if you have questions about our hiring
                  process.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid sm={12} md={6} lg={7}>
            <div className="xcd">
              <Typography variant="h4" color="neutral.b900">
                Careers
              </Typography>
              <br/>
                  <br/>
            </div>
            <div>
              <div>
                <Typography variant="large" color="neutral.b900">
                Join our dynamic team at Panorama where passion meets purpose. Connect with us empower businesses and individuals to succeed, and elevate your career to new heights. 
Submit your resume and cover letter to info@panoramamas.com today.

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
