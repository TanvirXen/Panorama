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
        Acquire the ability to obtain in-depth financial insights and implement advanced strategies.
        </Typography>
        </div>
        <div style={{paddingTop:'8px'}}>
        <Typography variant="large" color="neutral.b200">
        Access high-level financial advice without the commitment of a full-time CFO through our Fractional CFO services. We provide expert guidance tailored to the specific needs of your business. With our flexible solution, you can benefit from the strategic insights and financial expertise of a seasoned CFO, optimizing your financial decision-making and driving sustainable growth. Our Fractional CFO services offer the perfect balance of expertise and cost-efficiency to support your business&apos;s financial success.
        </Typography>
        </div>
        </div>

      </Container>
    </div>
  );
}
