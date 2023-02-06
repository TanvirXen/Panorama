import React from "react";
import Typography from "@mui/material/Typography";
import AccessibilityIcon from "../reUse/AccessibilityIcon";
import HelpIcon from "../reUse/HelpIcon";
export default function PortalHeader() {
  return (
    <div className="portalHeader">
        <div className="textHeader">
        <Typography variant="large" color="neutral.b800">
        Assesment
      </Typography>
        </div>
        <div className="icn">
            <AccessibilityIcon/>
            <HelpIcon/>
        </div>
    </div>
  );
}
