import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FaqData from "./faqData";
import FaqCard from "./faqCard";
export default function FAQ() {
  return (
    <div className="faq">
      <div className="fra">
        <Container maxWidth="xl">
          <div>
            <Typography variant="h1R" color="neutral.b900">
              Frequently Asked Questions
            </Typography>
          </div>
          <div className="faqa">
     {
      FaqData.map((e)=>{
        return <FaqCard question={e.question} key={e.id} answer={e.answer} />
      })
     }
  

          </div>
        </Container>
      </div>
    </div>
  );
}
