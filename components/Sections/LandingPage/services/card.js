import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Tag } from "@carbon/react";
import Link from "next/link";
export default function CardService({ img, name, desc,type,id,url }) {
  return (
    <>
    {  url=="/"?    <Grid xs={12} sm={12} md={6} lg={6} xl={6}>

      <div className="cardsd">

        <img src={img} />

        <div className="mnt">
  <div>        <Tag className="tagcs"  size="sm" >
       {"Coming Soon"}
      </Tag></div>
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

    </Grid>:  <Grid md={6} lg={6} xl={6} key={id}>
            <Link href={url} passHref >
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
      </Link>
    </Grid>}
    </>

  );
}
