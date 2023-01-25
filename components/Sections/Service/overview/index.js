import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import Grid from "@mui/material/Grid";
export default function Overview() {
  return (
    <div className="overview">
      <Container maxWidth="xl">
        <div className="overText">
        <div>
        <Typography variant="small" color="neutral.b50">
        OVERVIEW
        </Typography>
        </div>
        <div style={{paddingTop:'8px'}}>
        <Typography variant="h1" color="neutral.b900">
        Unlock the full potential of your business with our expert consulting services
        </Typography>
        </div>
        <div style={{paddingTop:'8px'}}>
        <Typography variant="large" color="neutral.b200">
        Impact measurement is the process of determining the positive and negative effects of an action or program on a targeted population or the environment. This can include assessing the outcomes of a project or initiative in terms of specific goals and objectives, as well as measuring the impact in terms of broader social and economic indicators. Impact measurement can be used to inform decision-making, evaluate program effectiveness, and communicate results to stakeholders. There are several different frameworks and methodologies that can be used for impact measurement, including both quantitative and qualitative approaches. Some common methods include surveys, interviews, case studies, and cost-benefit analysis.

        </Typography>
        </div>
        </div>

      </Container>
    </div>
  );
}
