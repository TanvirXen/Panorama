import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Button} from "@carbon/react";
export default function HeroService() {
  return (
    <div className="serhero">
      <Container maxWidth="xl">
        <div className="serheroser">
          <div>
            <Typography variant="small" color="neutral.b50">
              Research, Documentation & Development
            </Typography>
          </div>
          <div style={{ paddingTop: "8px" ,paddingBottom:'180px'}}>
            <Typography variant="h1" color="neutral.b0">
            Embark on a journey towards your project 
            </Typography>
          </div>
          <div style={{paddingTop:'12px'}}>
          <Button kind="primary" size="lg">
                Book a Meeting
                </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
