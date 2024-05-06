import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Button} from "@carbon/react";
export default function HeroService() {
  return (
    <div className="serheroBus">
      <Container maxWidth="xl">
        <div className="serheroser">
          <div>
            <Typography variant="small" color="neutral.b50">
            Business Consulting
            </Typography>
          </div>
          <div style={{ paddingTop: "8px" ,paddingBottom:'180px'}}>
            <Typography variant="h1" color="neutral.b0">
            Unlock the full potential of your business with our expert
            </Typography>
          </div>
          <div style={{paddingTop:'12px'}}>
          <Button kind="primary" size="lg" onClick={()=>window.open("https://calendly.com/panoramaltd/consultation")}>
                Book a Meeting
          </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
