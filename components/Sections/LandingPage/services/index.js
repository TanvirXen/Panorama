import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
export default function Service() {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid xs={12}  sm={12} md={12}>
            <div className="trst">
              <Typography variant="h1R" color="neutral.b900">
                Our Services
              </Typography>
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={12} xl={4}  >
            <div className="srv">
              <div className="pfr">
                <Typography variant="large" color="neutral.b900">
                  Assesment
                </Typography>
              </div>
              <div className="pfr">
                <Typography variant="large" color="neutral.b900">
                  Solutions
                </Typography>
              </div>
              <div className="pfr">
                <Typography variant="large" color="neutral.b900">
                  Consulting
                </Typography>
              </div>
              <div className="pfrs">
                <Typography variant="large" color="neutral.b900">
                  Capital
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid container spacing={0} md={12} lg={12} xl={8} >
            <Grid md={6} lg={6} xl={6} >
              <div className="cardsd">
                <img src="rsrch.png" />
                <div className="mnt">
                  <div>
                    <Typography variant="large" color="neutral.b900">
                      Training
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="small" color="neutral.b200">
                      Management consulting is the practice of providing
                      consulting services to organizations to improve their
                      performance or in any way to assist in achieving
                      organizational objectives.
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid md={6} lg={6} xl={6}>
              <div className="cardsd">
                <img src="rsrch.png" />
                <div className="mnt">
                  <div>
                    <Typography variant="large" color="neutral.b900">
                      Training
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="small" color="neutral.b200">
                      Management consulting is the practice of providing
                      consulting services to organizations to improve their
                      performance or in any way to assist in achieving
                      organizational objectives.
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid md={6} lg={6} xl={6}>
              <div className="cardsd">
                <img src="rsrch.png" />
                <div className="mnt">
                  <div>
                    <Typography variant="large" color="neutral.b900">
                      Training
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="small" color="neutral.b200">
                      Management consulting is the practice of providing
                      consulting services to organizations to improve their
                      performance or in any way to assist in achieving
                      organizational objectives.
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid md={6} lg={6} xl={6}>
              <div className="cardsd">
                <img src="rsrch.png" />
                <div className="mnt">
                  <div>
                    <Typography variant="large" color="neutral.b900">
                      Training
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="small" color="neutral.b200">
                      Management consulting is the practice of providing
                      consulting services to organizations to improve their
                      performance or in any way to assist in achieving
                      organizational objectives.
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
