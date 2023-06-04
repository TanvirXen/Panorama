import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
export default function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="xl">
        <div className="foot">
          <div className="flogo">
            <div>
              <img src="logoBlack.svg" alt="" srcset="" />
            </div>
            <div>
              <Typography variant="small" color="neutral.b200">
                Enabling and Empowering individuals to achieve their dreams.
                <br />
                <br />
                Redefining the current business process through data-driven
                solutions to solve emerging challenges. Providing sustainable,
                user-centric, and comprehensive global solutions.
              </Typography>
            </div>

            <div>
              <Typography variant="small" color="neutral.b200">
                Copyright 2023 Panorama Management Advisory Services
              </Typography>
            </div>
          </div>
          <div className="ftext">
            <Grid container spacing={2}>
              <Grid item sm={4} md={4}>
                <div className="frl">
                  <Typography
                    variant="small"
                    color="neutral.b0"
                    style={{ paddingBottom: "8px" }}
                  >
                    Assesment
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                    Business Assesment
                  </Typography>
                </div>
                <div className="frl">
                  <Typography
                    variant="small"
                    color="neutral.b0"
                    style={{ paddingBottom: "8px" }}
                  >
                    Solutions
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                    B2B Platform
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                    Fractional CFO
                  </Typography>
                </div>
                <div className="frl">
                  <Typography
                    variant="small"
                    color="neutral.b0"
                    style={{ paddingBottom: "8px" }}
                  >
                    Socials
                  </Typography>
                  <div className="socialss">
                    <a href="https://www.linkedin.com/company/panoramamas/mycompany/">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 11V16M8 8V8.01M12 16V11M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6Z"
                          stroke="#949494"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/panoramamas">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.73478 14.1054 7.48043 14.2929 7.29289C14.4804 7.10536 14.7348 7 15 7H18V3H15C13.6739 3 12.4021 3.52678 11.4645 4.46447C10.5268 5.40215 10 6.67392 10 8V10H7Z"
                          stroke="#949494"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                    <a href="">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 4.01001C21 4.50001 20.02 4.69901 19 5.00001C17.879 3.73501 16.217 3.66501 14.62 4.26301C13.023 4.86101 11.977 6.32301 12 8.00001V9.00001C8.755 9.08301 5.865 7.60501 4 5.00001C4 5.00001 -0.182 12.433 8 16C6.128 17.247 4.261 18.088 2 18C5.308 19.803 8.913 20.423 12.034 19.517C15.614 18.477 18.556 15.794 19.685 11.775C20.0218 10.5527 20.189 9.28987 20.182 8.02201C20.182 7.77301 21.692 5.25001 22 4.00901V4.01001Z"
                          stroke="#949494"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/panoramamas/">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 7.5V7.51M4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H16C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H8C6.93913 20 5.92172 19.5786 5.17157 18.8284C4.42143 18.0783 4 17.0609 4 16V8ZM9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"
                          stroke="#949494"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  {/* <Typography variant="small" color="neutral.b200">
										Facebook
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Linkedin
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Twitter
									</Typography>
									<Typography variant="small" color="neutral.b200">
										Instagram
									</Typography> */}
                </div>
              </Grid>
              <Grid item sm={4} md={4}>
                <div className="frl">
                  <Typography
                    variant="small"
                    color="neutral.b0"
                    style={{ paddingBottom: "8px" }}
                  >
                    Consulting
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                    Training
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                    Research
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                    Consulting
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                    Documentation
                  </Typography>
                </div>
                <div className="frl">
                  <Typography
                    variant="small"
                    color="neutral.b0"
                    style={{ paddingBottom: "8px" }}
                  >
                    Capital
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                    VC Network
                  </Typography>
                </div>
              </Grid>
              <Grid item sm={4} md={4}>
                <div className="frl">
                  <Typography
                    variant="small"
                    color="neutral.b0"
                    style={{ paddingBottom: "8px" }}
                  >
                    Resources
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                    Blogs
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                    Courses
                  </Typography>{" "}
                  <Typography variant="small" color="neutral.b200">
                    Research
                  </Typography>
                </div>
                <div className="frl">
                  <Typography
                    variant="small"
                    color="neutral.b0"
                    style={{ paddingBottom: "8px" }}
                  >
                    Company
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                    About
                  </Typography>
                  <Typography variant="small" color="neutral.b200">
                    Careers
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}
