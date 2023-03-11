import React from 'react'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
export default function TeamCard() {
  return (
    <Grid xs={12} sm={6} md={6} lg={4} xl={3}>
    <div className="team">
      <img src="/bg1.png" />
      <div className="tms">
        <div>
          <Typography variant="large" color="neutral.b900">
            Tanvir Ishtiaq
          </Typography>
        </div>
        <div>
          <Typography variant="small" color="neutral.b900">
            Contribution
          </Typography>
        </div>
      </div>
    </div>
  </Grid>
  )
}
