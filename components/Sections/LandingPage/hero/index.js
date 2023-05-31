import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
export default function Hero() {
  return (
    <div className="herol">
      <Container maxWidth="xl"   sx={{
    px:0
  }}>
      <div className="heros">
        <div className="text">
        <Typography variant="h1" color="neutral.b0">
        Understand, prioritise and find solutions to your problems
              </Typography>
<div className="stext">
<Typography variant="large" color="neutral.b0">
              Empowering individuals and fostering collective 
growth to turn dreams into reality.
              </Typography>
</div>
        </div>

      </div>
      </Container>
    </div>
  );
}
