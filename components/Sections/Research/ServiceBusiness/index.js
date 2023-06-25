import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function ServiceBusiness() {
  return (
    <div className="serveBus">
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid md={8}>
            <div className="trsty">
              <Typography variant="small" color="neutral.b50">
                PROCESS
              </Typography>
            </div>
            <div>
              <Typography variant="h1R" color="neutral.b900">
                From research to delivery, we&apos;re your agile project
                partner.
              </Typography>
            </div>
            <div style={{ paddingTop: "24px" }}>
              <Typography variant="large" color="neutral.b200">
              Redefine your research approach for optimal project success by leveraging cutting-edge techniques that yield insightful data and develop the best strategies.
              </Typography>
            </div>
          </Grid>
          <Grid md={4}></Grid>

          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="rdd1.png" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                  Research
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Prior to embarking on the project, we dedicate ample time to conduct comprehensive research and analysis, emphasizing a thorough understanding of the problem at hand. Our team of experts employs cutting-edge research techniques to gather pertinent data and insights. Through this diligent process, we identify and incorporate best practices and strategies that guarantee the success of the project.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="rdd2.png" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                  Documentation
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                After attaining a profound comprehension of the project requirements, we meticulously document our findings in a comprehensive and detailed manner. Our documentation encompasses a wide range of aspects, including project plans, timelines, technical specifications, and quality assurance procedures. This meticulous approach guarantees that all stakeholders are aligned and provides a clear roadmap for project success.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={12} lg={4}>
            <div className="pdfs">
              <img src="rdd3.png" alt="" />
              <div>
                <Typography variant="large" color="neutral.b800">
                  Development
                </Typography>
              </div>

              <br />
              <div className="desc">
                <Typography variant="small" color="neutral.b200">
                Equipped with a robust research foundation and thorough documentation, we initiate the development phase. By employing agile development methods, we prioritize flexibility and adaptability, enabling us to swiftly respond to changes in project requirements and feedback. Our team collaborates closely, pooling their expertise to deliver outstanding results within the designated timeframe and budget constraints.

                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
