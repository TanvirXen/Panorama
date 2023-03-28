import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import Grid from "@mui/material/Grid";
import { useRouter } from 'next/navigation';
export default function Growth() {
  const router = useRouter();
  return (
    <div className="growth">
      <Container maxWidth="xl">
        <div className="overText">
          <div></div>
          <div style={{ paddingTop: "8px" }}>
            <Typography variant="h1R" color="neutral.b900">
            Take control and succeed

            </Typography>
          </div>
          <div style={{ paddingTop: "60px" }}>
            <Typography variant="large" color="neutral.b200">
            Get a bird&apos;s-eye view with our insightful business assessment, and speeden up your growth with our dynamic consultation and solution services.

            </Typography>
          </div>
        </div>
        <div style={{ paddingTop: "60px" }}>
          <Grid container spacing={0} style={{ paddingBottom: "100px" }}>
            <Grid xs={12} sm={12} md={12} lg={8}>
              <img src="growth.png" alt="" style={{ width: "100%" }} />
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={4}>
<div className="growthPadd">
<div style={{  paddingTop:'40px' }}>
                <Typography variant="h4" color="neutral.b800">
                We are your partner in growth
                </Typography>
              </div>
              <div style={{ paddingTop:'20px' }}>
                <Typography variant="large" color="neutral.b200">
                Join us and we will help you expand to new heights. We want to be more than just a delivery service, and our offerings reflect that. When we&apos;re on your side, nothing can stop you from accomplishing your goals.

                </Typography>
              </div>
              <div style={{ paddingTop:'40px' }}>
              <Button kind="primary" size="lg" onClick={() => router.push('/about')}>
                Learn More
                </Button>
              </div>
</div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
