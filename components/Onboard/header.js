import React from "react";
import {
  TextInput,
  Select,
  SelectItem,
  Checkbox,
  Button,
  ProgressIndicator,
  ProgressStep,
} from "@carbon/react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
export default function OnBoardHead({count}) {
  return (
    <div className="onbh">
      <Container maxWidth="xl">
    <div>
    <div className="onbHead">
          <Typography variant="large" color="neutral.b800">
            Account Set up
          </Typography>
          <img src="/logoFull.svg" alt="" srcset="" />
        </div>
        <div className="progressOnb">
          <ProgressIndicator currentIndex={count} spaceEqually={true}>
            <ProgressStep label="Personal Info" />
            <ProgressStep label="Business Info" />
            <ProgressStep label="Onboarding" />
            <ProgressStep label="Complete" complete={count===3?true:false} />
          </ProgressIndicator>
        </div>
    </div>
      </Container>
    </div>
  );
}
