import React from 'react'
import Typography from "@mui/material/Typography";
export default function CardWork({name,desc,id}) {
  return (
    <div className="wcard" key={id}>
    <div className="inner">
      <div>
        <Typography variant="large" color="neutral.b800">
        {name}
        </Typography>
      </div>
      <div className="para">
        <Typography variant="small" color="neutral.b200">
   {desc}
        </Typography>
      </div>
      {/* <div className="btn">
        <Button kind="primary" size="md" className="btnss">
          Learn More
        </Button>
      </div> */}
    </div>
  </div>
  )
}
