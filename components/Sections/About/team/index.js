import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import CareerIcon from "../../../reUse/career";
export default function Team() {
  return (
    <div className="abtTeam">
    <Container maxWidth="xl">
      <Grid
        container
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <Grid xs={12} sm={12} md={12} lg={12}>
          <div style={{ paddingBottom: "15px" }}>
            <Typography variant="h1R" color="neutral.b900">
              Our Team
            </Typography>
          </div>
        </Grid>
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
      </Grid>
    </Container>
  </div>
  )
}
