import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import OnBoardHead from "./header";
import UserProfile from "./userProfile";
import BusinessProfile from "./businessProfile";
import QuestionOnboard from "./Questionaire";
import OnBoardComplete from "./complete";
export default function OnBoardMain() {
  const [count, setcount] = useState(0);
  return (
    <div className="onboards">
      <OnBoardHead count={count} />
      <Container maxWidth="xl">
        {count === 0 ? <UserProfile setcount={setcount} /> : <div></div>}
        {count === 1 ? <BusinessProfile setcount={setcount} /> : <div></div>}
        {count === 2 ? <QuestionOnboard setcount={setcount} /> : <div></div>}
        {count === 3 ? <OnBoardComplete setcount={setcount} /> : <div></div>}
      </Container>
    </div>
  );
}
