import React from 'react'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function FaqCard({question,answer,id}) {
  return (
    <Accordion
    key={id}
    sx={{
      "&:before": {
        display: "none",
      },
    }}

    style=
    {{
      borderRadius: "0px",
      boxShadow: "none",
      marginBottom: "20px",
      border: "none",
    }}
    >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
      style={{ paddingLeft: "32px", paddingRight: "32px" }}
    >
      <Typography
        variant="large"
        color="neutral.b800"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        {question}
      </Typography>
    </AccordionSummary>
    <AccordionDetails
      style={{
        paddingBottom: "40px",
        paddingLeft: "32px",
        paddingRight: "32px",
      }}
    >
      <Typography variant="small" color="neutral.b200" dangerouslySetInnerHTML={{__html: answer}}>
{/* {answer} */}
      </Typography>
    </AccordionDetails>
  </Accordion>
  )
}
