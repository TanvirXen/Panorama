import React from 'react'
import Typography from "@mui/material/Typography";
import { Tabs, TabList, Tab, TabPanels, TabPanel, TextInput, Select, SelectItem, Checkbox, Button ,Tag } from "@carbon/react";
import Grid from "@mui/material/Grid";
export default function BusinessInfoTab() {
  return (
    <TabPanel>
            <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <div className="onbUserProfileBtn">
        <div>
            <Typography variant="h4B" color="neutral.b800">
              Business Info
            </Typography>
          </div>
          <div style={{width:"80%"}}>
            <Typography variant="small" color="neutral.b800">
            Take our Free Assessment and understand your problems better to accelerate your business growth or solve your business prpblems 
            </Typography>
          </div>

          <div className="onbBtn">
            <Button kind="primary" size="md" className="btnss" onClick={()=>handleNext()} >
              Cancel
            </Button>
            <Button kind="primary" size="md" onClick={()=>handleSave()}>
              Save Changes
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <div className="onPScroll">
          <div className="onpInput">
          <div className="onin">
              <TextInput
                className="txtF"
                id="text-input-1"
                type="text"
                labelText="Business Name"
                placeholder="Business Name"
              />
            </div>
            <div className="onin">
              <TextInput
                className="txtF"
                id="text-input-1"
                type="text"
                labelText="Website"
                placeholder="Website"
              />
            </div>
            <div className="onin">
              <TextInput
                className="txtF"
                id="text-input-1"
                type="text"
                labelText="Address Line 1"
                placeholder="Address Line 1"
              />
            </div>
            <div className="onin">
              <TextInput
                className="txtF"
                id="text-input-1"
                type="text"
                labelText="Address Line 2"
                placeholder="Address Line 2"
              />
            </div>
            <div className="oninn">
            <Select
                id="select-1"
                defaultValue="placeholder-item"
                labelText="City"
              >
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="City"
                />
                <SelectItem value="option-1" text="Option 1" />
                <SelectItem value="option-2" text="Option 2" />
                <SelectItem value="option-3" text="Option 3" />
              </Select>
              <Select
                id="select-1"
                defaultValue="placeholder-item"
                labelText="State"
              >
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="State"
                />
                <SelectItem value="option-1" text="Option 1" />
                <SelectItem value="option-2" text="Option 2" />
                <SelectItem value="option-3" text="Option 3" />
              </Select>
            </div>
            <div className="oninn">
            <Select
                id="select-1"
                defaultValue="placeholder-item"
                labelText="Country"
              >
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Country"
                />
                <SelectItem value="option-1" text="Option 1" />
                <SelectItem value="option-2" text="Option 2" />
                <SelectItem value="option-3" text="Option 3" />
              </Select>
              <Select
                id="select-1"
                defaultValue="placeholder-item"
                labelText="Zip Code"
              >
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Zip Code"
                />
                <SelectItem value="option-1" text="Option 1" />
                <SelectItem value="option-2" text="Option 2" />
                <SelectItem value="option-3" text="Option 3" />
              </Select>
            </div>
            <div className="onin">
              <TextInput
                className="txtF"
                id="text-input-1"
                type="text"
                labelText="Years In Business"
                placeholder="Years In Business"
              />
            </div>


            <div className="onin">
              <TextInput
                className="txtF"
                id="text-input-1"
                type="text"
                labelText="Business Legal Structure"
                placeholder="Business Legal Structure"
              />
            </div>
            <div className="oninn">
                <div className="on25">
                <Select
                id="select-1"
                defaultValue="placeholder-item"
                labelText="Revenue Range"
              >
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="BDT"
                />
                <SelectItem value="option-1" text="Option 1" />
                <SelectItem value="option-2" text="Option 2" />
                <SelectItem value="option-3" text="Option 3" />
              </Select>
                </div>
            <div className="on75">
            <Select
                id="select-1"
                defaultValue="placeholder-item"
                labelText="Select range"
              >
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Select range"
                />
                <SelectItem value="option-1" text="Option 1" />
                <SelectItem value="option-2" text="Option 2" />
                <SelectItem value="option-3" text="Option 3" />
              </Select>
            </div>
            </div>
            <div className="onin">
              <Select
                id="select-1"
                defaultValue="placeholder-item"
                labelText="Number Of Employees"
              >
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Number Of Employees"
                />
                <SelectItem value="option-1" text="Option 1" />
                <SelectItem value="option-2" text="Option 2" />
                <SelectItem value="option-3" text="Option 3" />
              </Select>
            </div>
            <div className="onin">
              <Select
                id="select-1"
                defaultValue="placeholder-item"
                labelText="Physical Locations"
              >
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Physical Locations"
                />
                <SelectItem value="option-1" text="Option 1" />
                <SelectItem value="option-2" text="Option 2" />
                <SelectItem value="option-3" text="Option 3" />
              </Select>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
    </TabPanel>
  )
}
