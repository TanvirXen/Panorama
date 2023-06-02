import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
export default function TeamCard({ img, name, title, email,linkedin }) {
  return (
    <Grid xs={12} sm={6} md={6} lg={4} xl={4}>
      <div className="team">
        <img src={img} style={{ borderRadius: "50%" }} />
        <div className="tms">
          <div>
            <Typography variant="large" color="neutral.b900">
              {name}
            </Typography>
          </div>
          <div>
            <Typography variant="small" color="neutral.b900">
              {title}
            </Typography>
          </div>
          <div>
{email?            <a href={`mailto:${email}`}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3287_39173)">
                  <path
                    d="M23.75 6.25H6.25C4.86929 6.25 3.75 7.36929 3.75 8.75V21.25C3.75 22.6307 4.86929 23.75 6.25 23.75H23.75C25.1307 23.75 26.25 22.6307 26.25 21.25V8.75C26.25 7.36929 25.1307 6.25 23.75 6.25Z"
                    stroke="#0065FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.75 8.75L15 16.25L26.25 8.75"
                    stroke="#0065FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3287_39173">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>:""}
{linkedin?            <a href={linkedin}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3287_39177)">
                  <path
                    d="M22.5 5H7.5C6.11929 5 5 6.11929 5 7.5V22.5C5 23.8807 6.11929 25 7.5 25H22.5C23.8807 25 25 23.8807 25 22.5V7.5C25 6.11929 23.8807 5 22.5 5Z"
                    stroke="#0065FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 13.75V20"
                    stroke="#0065FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 10V10.0125"
                    stroke="#0065FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 20V13.75"
                    stroke="#0065FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 20V16.25C20 15.587 19.7366 14.9511 19.2678 14.4822C18.7989 14.0134 18.163 13.75 17.5 13.75C16.837 13.75 16.2011 14.0134 15.7322 14.4822C15.2634 14.9511 15 15.587 15 16.25"
                    stroke="#0065FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3287_39177">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>:""}
          </div>
        </div>
      </div>
    </Grid>
  );
}
