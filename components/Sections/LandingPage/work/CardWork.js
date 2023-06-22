import React, { useState } from 'react'
import Typography from "@mui/material/Typography";
export default function CardWork({name,desc,id,url}) {
  const [more, setmore] = useState(false)
  return (
    <div className="wcard" key={id}>
      <div className='img'>
        <img src={url} />
        <div className='imgText'>
        <Typography variant="large" color="neutral.b0">
        {name}
        </Typography>
      </div>
      </div>
    <div className="inner">
      {/* <div>
        <Typography variant="large" color="neutral.b800">
        {name}
        </Typography>
      </div> */}
      <div className={more?"":"para"}>
        <Typography variant="small" color="neutral.b200">
   {desc}
        </Typography>
      </div>
      <div>
          {more?<span className="xyzz" onClick={()=>setmore(false)}>See Less</span>:   <span className="xyzz" onClick={()=>setmore(true)}>See More</span>}
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
