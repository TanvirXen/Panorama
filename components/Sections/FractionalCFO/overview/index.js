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
        Unlock your financial potential with Panorama's Fractional CFO services. Our team of experienced professionals provides expert financial management on a part-time or project basis, giving small and medium-sized businesses access to the same level of financial expertise as larger companies. 
<br/><br/>
Enhance your long-term success with our data driven strategies and achieve financial stability with ease.
        </Typography>
        </div>
        </div>

      </Container>
    </div>
  );
}
