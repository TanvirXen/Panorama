import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import Grid from "@mui/material/Grid";
export default function Knowledge() {
  return (
    <div className="overview">
      <Container maxWidth="xl">
        <div className="overText">
          <div></div>
          <div style={{ paddingTop: "8px" }}>
            <Typography variant="h1R" color="neutral.b900">
              Tailored to meet your unique needs, our resources are specially
              crafted just for you.
            </Typography>
          </div>
          <div style={{ paddingTop: "60px" }}>
            <Typography variant="large" color="neutral.b200">
              At Panorama, we understand that every business is different.
              That's why we offer resources designed just for you, customized to
              meet your specific needs and drive success.
            </Typography>
          </div>
          <div style={{ paddingTop: "60px" }}>
            <Button kind="primary" size="lg">
              Knowledge Center is Coming Soon!
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
