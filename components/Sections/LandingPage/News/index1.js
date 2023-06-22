import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import Grid from "@mui/material/Grid";
export default function NewsG() {
	return (
    <div className="newsG">
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid md={6}>
            <div className="stay">
              <Typography variant="h1R" color="neutral.b900">
                Stay up to date with the greatest and latest news from us
              </Typography>
            </div>
            <div className="newsImage">
              <img src="news.png"/>
            </div>
          </Grid>
          <Grid md={6}>
            <div className="stays">
              <Typography variant="large" color="neutral.b200">
             Recieve the most valuable updates and stay constantly informed by having them delivered directly to your inbox!

              </Typography>
              <div>
                <TextInput
                  id="text-input-1"
                  type="text"
                  size="lg"
                  placeholder="Email"
                           />
              </div>
              <div>
                <Button kind="primary" size="lg">
                  Submit
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
