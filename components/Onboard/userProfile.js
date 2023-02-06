import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { TextInput, Select, SelectItem, Checkbox, Button,Tag } from "@carbon/react";
export default function UserProfile({setcount}) {
  async function handleNext(){
    setcount(1)
  }
  async function handleSave(){
    setcount(1)
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <div className="onbUserProfileBtn">
          <div>
            <Typography variant="large" color="neutral.b800">
              Let’s get started...
            </Typography>
          </div>
          <div>
            <Typography variant="h4B" color="neutral.b800">
              Tell us a bit about you
            </Typography>
          </div>
          <div className="onbBtn">
            <Button kind="primary" size="lg" className="btnss" onClick={()=>handleNext()} >
              Next
            </Button>
            <Button kind="primary" size="lg" onClick={()=>handleSave()}>
              Save and Close
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <div className="onBScroll">
          <div className="onbInput">
            <div className="onin">
              <TextInput
                className="txtF"
                id="text-input-1"
                type="text"
                labelText="First Name"
                placeholder="First Name"
              />
            </div>
            <div className="onin">
              <TextInput
                className="txtF"
                id="text-input-1"
                type="text"
                labelText="Last Name"
                placeholder="Last Name"
              />
            </div>
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
                labelText="Title"
                placeholder="Title"
              />
            </div>
            <div className="onin">
              <TextInput
                className="txtF"
                id="text-input-1"
                type="text"
                labelText="Responsibilities"
                placeholder="Responsibilities"
              />
               <Tag filter={true}>Owner</Tag><Tag filter={true}>Branding</Tag><Tag filter={true}>Finance</Tag>
            </div>
            <div className="onin">
              <TextInput
                className="txtF"
                id="text-input-1"
                type="text"
                labelText="Email"
                placeholder="Email"
              />
            </div>
            <div className="onin">
              <TextInput
                className="txtF"
                id="text-input-1"
                type="text"
                labelText="Phone"
                placeholder="Phone"
              />
            </div>
            <div className="onin">
              <Select
                id="select-1"
                defaultValue="placeholder-item"
                labelText="Industry"
              >
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Industry"
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
                labelText="Business Type"
              >
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Business Type"
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
                labelText="Business Stage"
              >
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Business Stage"
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
                labelText="Where did you hear about us?"
              >
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Choose an option"
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
                labelText="Referral Code(if any)"
                placeholder="Referral Code(if any)"
              />
            </div>
            <div className="onin">
              <TextInput
                className="txtF"
                id="text-input-1"
                type="text"
                labelText="Promo code(if any)"
                placeholder="Promo code(if any)"
              />
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
