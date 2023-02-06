import React from 'react'
import Typography from "@mui/material/Typography";
export default function Card() {
  return (
    <div className="card">
    <div>
      <Typography variant="largeB" color="neutral.b800">
        What is your goal with Panorama?
      </Typography>
    </div>
    <div>
      <Typography variant="small" color="neutral.b200">
        We mention that we want to understand their motivations so we
        can provide them with a great web experience.
      </Typography>
    </div>

    <div className="bar"></div>

    <div className="options">
      <div className="opt">
        <Typography variant="xsmall" color="neutral.b800">
          What is your goal with Panorama?
        </Typography>
      </div>
      <div className="opt">
        <Typography variant="xsmall" color="neutral.b800">
          What is your goal with Panorama?
        </Typography>
      </div>
      <div className="opt">
        <Typography variant="xsmall" color="neutral.b800">
          What is your goal with Panorama?
        </Typography>
      </div>
      <div className="opt">
        <Typography variant="xsmall" color="neutral.b800">
          What is your goal with Panorama?
        </Typography>
      </div>
    </div>
  </div>
  )
}
