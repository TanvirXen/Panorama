import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { InlineWidget } from "react-calendly";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import CareerIcon from "../../../reUse/career";
import {TeamData} from "./teamData";
import TeamCard from './teamCard'
export default function Team() {
  return (
    <div className="abtTeam">
    <Container maxWidth="xl">
      <Grid
        container
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <Grid xs={12} sm={12} md={12} lg={12}>
          <div style={{ paddingBottom: "15px" }}>
            <Typography variant="h1R" color="neutral.b900">
              Team
            </Typography>
          </div>
        </Grid>

{TeamData.map((e)=>{
  return <TeamCard name={e.name} email={e.email} img={e.img} linkedin={e.linkedin} title={e.title} key={e.id} />
})}
      </Grid>
    </Container>
  </div>
  )
}
