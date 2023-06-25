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
        Allow our team of expert consultants to navigate you through the complex terrain of business management. Our highly proficient professionals offer a wide range of comprehensive services, including strategic planning, marketing, operations, and organizational development. By leveraging our expertise, you can adeptly navigate the obstacles that inevitably arise in business operations.
        </Typography>
        </div>
        </div>

      </Container>
    </div>
  );
}
