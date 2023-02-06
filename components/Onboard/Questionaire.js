import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import Card from "./card";
export default function QuestionOnboard({setcount}) {
  async function handleNext(){
    setcount(3)
  }
  async function handleSave(){
    setcount(3)
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <div className="onbUserProfileBtn">
          <div>
            <Typography variant="h4B" color="neutral.b800">
              What is your Business address
            </Typography>
          </div>
          <div>
            <Typography variant="small" color="neutral.b200">
              We mention the privacy policy and terms we adhere to here so the
              business owner feels safe to share their information with us,
            </Typography>
          </div>
          <div className="onbBtn">
            <Button kind="primary" size="lg" onClick={()=>handleSave()}>
              Save and Submit
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <div className="onBScroll">
          <div className="onbar">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
