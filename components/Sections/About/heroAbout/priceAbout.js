import React from "react";
import Container from "@mui/material/Container";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
export default function PricingAbout() {
  return (
    <div className="abtheros">
      <Container maxWidth="xl">
        <p className="abtp">
        Pricing
        </p>
        <p className="abtpfaq">
       Check out our available plans
        </p>
<div className="bvc">
<Button kind="primary" size="md" className="btnss" onClick={()=>window.open("https://app.panoramamas.com/")}>
                  Contact us
                </Button>
</div>
      </Container>
    </div>
  );
}
