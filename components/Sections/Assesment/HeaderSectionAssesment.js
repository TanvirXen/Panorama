import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
export default function HeaderSectionAssesment() {
  return (
    <div className="hsecassbg">
      <Container maxWidth="xl">
        <div className="hsecAssesment">
          <Grid container spacing={0}>
            <Grid md={8}>
              <div className="hbrs">
                <Typography variant="h1R" color="neutral.b900">
                  Understand your business better with our automated assessment.
                </Typography>
              </div>
            </Grid>
            <Grid md={4}>
              <div className="hbrss">
                <Button kind="primary" size="lg" onClick={() => window.open("https://production.panoramamas.com/")}>
                 Try Now
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>

    </div>
  )
}
