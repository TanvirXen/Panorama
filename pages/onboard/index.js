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
import OnBoardHead from "../../components/Onboard/header";
import UserProfile from "../../components/Onboard/userProfile";
import OnBoardMain from "../../components/Onboard";
export default function OnBoard() {
  return (
    <div>
      <OnBoardMain />
    </div>
  );
}
