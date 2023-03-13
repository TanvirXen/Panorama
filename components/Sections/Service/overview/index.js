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
        Get all the services your business needs, right here, with Panorama.
        </Typography>
        </div>
        <div style={{paddingTop:'8px'}}>
        <Typography variant="large" color="neutral.b200">
        You deserve a break from the stress of running a business. Trust us to take care of your financials and strategies, so you can focus on what you do best.
        </Typography>
        </div>
        </div>

      </Container>
    </div>
  );
}
