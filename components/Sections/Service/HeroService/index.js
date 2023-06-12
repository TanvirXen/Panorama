import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Button} from "@carbon/react";
export default function HeroService() {
  return (
    <div className="serheroService">
      <Container maxWidth="xl">
        <div className="serheroser">
          <div>
            <Typography variant="small" color="neutral.b50">
              Services
            </Typography>
          </div>
          <div style={{ paddingTop: "8px" ,paddingBottom:'150px'}}>
            <Typography variant="h1" color="neutral.b0">
            Find Your Perfect Partner with Our Expert
 Service Providers
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
