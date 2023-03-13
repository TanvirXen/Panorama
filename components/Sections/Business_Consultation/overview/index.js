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
        Unleash the full potential of your business with customized insights and powerful solutions.
        </Typography>
        </div>
        <div style={{paddingTop:'8px'}}>
        <Typography variant="large" color="neutral.b200">
        Navigate the complexities of running a business with our expert consulting services. Our experienced team offers a wide range of services including strategic planning, marketing, operations, and organizational development. 
        </Typography>
        </div>
        </div>

      </Container>
    </div>
  );
}
