import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import CareerIcon from "../../../reUse/career";

export default function Career() {
  return (
    <div className="abtprofile">
    <div className="anb">
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid sm={12} md={6} lg={5}>
            <div className="crrs">
              <CareerIcon />
              <div className="btrn">
                <Typography variant="large" color="neutral.b900">
                  Please contact us if you have questions about our hiring
                  process.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid sm={12} md={6} lg={7}>
            <div className="xcd">
              <Typography variant="h4" color="neutral.b900">
                Careers
              </Typography>
              <br/>
                  <br/>
            </div>
            <div>
              <div>
                <Typography variant="large" color="neutral.b900">
                  Inclusion, belonging and anti-racism 
                  <br/>
                  <br/>
                  As an inclusive
                  workplace, Futerra encourages employees to bring their
                  true self to work. It’s crucial that a diverse range of
                  ideas, opinions and perspectives shape our work as
                  intersectional and justice agendas are central to
                  sustainable development. We do all we can to promote
                  equality of opportunity, encourage representation, and
                  eliminate discrimination.
                  <br/>
                  <br/>
                  The anti-discrimination
                  statement below is important legal wording, our intent is
                  to welcome everyone. 
                  <br/>
                  <br/>
                  Futerra is an equal opportunity
                  employer and does not discriminate against any employee or
                  applicant on the basis of race (including traits
                  historically associated with race), colour, creed,
                  ethnicity, disability, religion, national origin, age,
                  sex/gender (including pregnancy), arrest record, military
                  status, veteran status, sexual orientation, gender
                  identity, gender expression, transgender status, marital
                  or partnership status, familial status, caregiver status,
                  status as a victim of domestic violence, status as a
                  victim of sexual violence, status as a victim of stalking,
                  criminal history, citizenship, immigration status, genetic
                  predisposition or carrier status, genetic information,
                  sexual and reproductive health decision making, credit
                  history, salary history, unemployment status,
                  pre-employment marijuana testing, or any other basis
                  protected by law. 
                  <br/>
                  <br/>
                  Internships 
                  <br/>
                  <br/>
                  Futerra does not offer
                  internships. If you’re early in your career or leaving
                  education, please watch this site for entry-level
                  positions – which are paid and permanent.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  </div>
  )
}
