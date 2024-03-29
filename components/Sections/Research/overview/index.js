import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import Grid from "@mui/material/Grid";
export default function Overview() {
  return (
    <div className="overview">
      <Container maxWidth="xl">
        <div className="overText">
        <div>
        <Typography variant="small" color="neutral.b50">
        OVERVIEW
        </Typography>
        </div>
        <div style={{paddingTop:'8px',paddingBottom:'40px'}}>
        <Typography variant="h1" color="neutral.b900">
        Innovating through research, documentation, and development to help you achieve project success
        </Typography>
        </div>
        <div style={{paddingTop:'8px'}}>
        <Typography variant="large" color="neutral.b200">
        Collaborate with us to achieve project success through our partnership in innovative research, documentation, and agile development.
        </Typography>
        </div>
        </div>

      </Container>
    </div>
  );
}
