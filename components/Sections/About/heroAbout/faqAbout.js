import React from "react";
import Container from "@mui/material/Container";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
export default function FAQAbout() {
  return (
    <div className="abtheros">
      <Container maxWidth="xl">
        <p className="abtp">
        Frequently Asked Questions
        </p>
        <p className="abtpfaq">
        If you haven&apos;t found the answer you&apos;re looking for, please don&apos;t hesitate to get in touch with us
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
