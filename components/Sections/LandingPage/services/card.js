import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
export default function CardService({ img, name, desc,type }) {
  return (
    <>
    {  type=="Assessment"?    <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
      <div className="cardsd">
        <img src={img} />
        <div className="mnt">
          <div>
            <Typography variant="large" color="neutral.b900">
              {name}
            </Typography>
          </div>
          <div>
            <Typography variant="small" color="neutral.b200">
              {desc}
            </Typography>
          </div>
        </div>
      </div>
    </Grid>:  <Grid md={6} lg={6} xl={6}>
      <div className="cardsd">
        <img src={img} />
        <div className="mnt">
          <div>
            <Typography variant="large" color="neutral.b900">
              {name}
            </Typography>
          </div>
          <div>
            <Typography variant="small" color="neutral.b200">
              {desc}
            </Typography>
          </div>
        </div>
      </div>
    </Grid>}
    </>

  );
}
