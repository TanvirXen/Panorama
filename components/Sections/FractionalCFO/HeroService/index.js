import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Button} from "@carbon/react";
export default function HeroService() {
  return (
    <div className="serheroCFO">
      <Container maxWidth="xl">
        <div className="serheroser">
          <div>
            <Typography variant="small" color="neutral.b50">
              Fractional CFO
            </Typography>
          </div>
          <div style={{ paddingTop: "8px" ,paddingBottom:'160px'}}>
            <Typography variant="h1" color="neutral.b0">
            Get access to high level financial insights and strategies
            </Typography>
          </div>
          <div>
          <Button kind="primary" size="lg" onClick={()=>window.open("https://calendly.com/panoramaltd/consultation")}>
                Book a Meeting
          </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
