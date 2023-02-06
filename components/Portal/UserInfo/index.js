import React from "react";
import Container from "@mui/material/Container";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Tabs, TabList, Tab, TabPanels, TabPanel, Button } from "@carbon/react";
import UserInfoTab from "./UserInfoTab";
import BusinessInfoTab from "./BusinessInfoTab";
import AssesmentInfoTab from "./AssesmentInfoTab";
export default function UserInfo() {
  const [image, setImage] = useState({ preview: "/john_doe.png", raw: "" });
  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  return (
 <div style={{display:'flex',justifyContent:'center'}}>
      <div className="custom_container">
      <Grid container spacing={0}>
        <Grid sm={12} md={12} lg={12} xl={12}>
          <div className="userInfoFixed">
            <div className="profileImage">
              <label htmlFor="upload-button">
                <div>
                  <img
                    src={image.preview}
                    alt="dummy"
                    width="300"
                    height="300"
                  />
                </div>
              </label>
              <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleChange}
              />
            </div>
            <div className="profileInfo">
              <div>
                {" "}
                <Typography variant="largeB" color="neutral.b600">
                  Aref Ali
                </Typography>
              </div>
              <div>
                <Typography variant="small" color="neutral.b600">
                  arefali@panaromamas.com
                </Typography>
              </div>
              <div className="type">
                <Typography variant="xsmall" color="neutral.b600">
                  Admin
                </Typography>
              </div>
            </div>
          </div>
          <div className="userTabs">
            <Tabs>
              <TabList activation="manual" aria-label="List of tabs">
                <Tab>Personal Info</Tab>
                <Tab>Business Info</Tab>
                <Tab >Assesments</Tab>

              </TabList>
              <TabPanels>
              <UserInfoTab/>
              <BusinessInfoTab/>
              <AssesmentInfoTab/>
              </TabPanels>
            </Tabs>
          </div>
        </Grid>
      </Grid>
      </div>
 </div>
  );
}
