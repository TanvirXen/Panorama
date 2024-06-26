import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
export default function HeroSectionAssesment() {
  return (
    <div>
      {" "}
      <div className="assesDisplay">
        <img src="/assesmentDisplay.png" />
      </div>
      <div className="assesSection3">
        <Container maxWidth="xl">
          <div>
            <Typography variant="small" color="neutral.b50">
              OVERVIEW
            </Typography>
          </div>
          <div>
            <Typography variant="h2R" color="neutral.b900">
              Get to know your business better
            </Typography>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <Typography variant="large" color="neutral.b200">
            Optimize your business operations using our automated assessment tools, enabling you to gain valuable insights into your strengths and areas that require improvement. This empowers you to make informed decisions that drive long-term success.
            </Typography>
          </div>
        </Container>
      </div>
    </div>
  );
}
