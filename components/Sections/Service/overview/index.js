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
        Discover a comprehensive range of services tailored to your business requirements, conveniently available in one place through Panorama
        </Typography>
        </div>
        <div style={{paddingTop:'8px'}}>
        <Typography variant="large" color="neutral.b200">
        Give yourself a well-deserved break from the challenges of managing your business. Entrust us with your financials and strategies, allowing you to concentrate on your core competencies and excel at what you do best
        </Typography>
        </div>
        </div>

      </Container>
    </div>
  );
}
