import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import Map, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import LocationIcon from "../../../reUse/LocationIcon";
import FB from '../../../reUse/fb'
import LD from '../../../reUse/ld'
import IG from '../../../reUse/ig'
import TW from '../../../reUse/tw'
export default function Maps() {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoicGFub3JhdGFuIiwiYSI6ImNsZGMzbDJzdzAzaWQzd3Foc2I3ZmZ6cHQifQ.VLyUTQrkiQtMSYaYkTO9ag";
  return (
    <div className="contct">
      <div className="vbfd">
        <Container maxWidth="xl">
          <Grid container spacing={0}>
            <Grid md={12} lg={12}>
              <div>
                <div style={{ paddingBottom: "16px" }}>
                  <Typography variant="h1R" color="neutral.b900">
                    Contact Us
                  </Typography>
                </div>
                <div style={{ paddingBottom: "16px", width: "60%" }}>
                  <Typography variant="small" color="neutral.b900">
                    No one wants to have to contact support, but when they do, a
                    poor customer service experience can make a bad situation
                    even worse.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={6}>
              <div className="cnvc">
                <div>
                  <Map
                    initialViewState={{
                      width: "100%",
                      height: 600,
                      latitude: 37.8,
                      longitude: -122.4,
                      zoom: 14,
                    }}
                    style={{ height: 720 }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken={MAPBOX_TOKEN}
                  >
                    <Marker longitude={-122.4} latitude={37.8} color="blue" />
                  </Map>
                </div>
                <div className="cxz">
                  <div>
                    <div style={{ display: "flex" }}>
                      <LocationIcon />
                      <div style={{ paddingLeft: "4px" }}>
                        <Typography variant="small" color="neutral.b900">
                          USA
                        </Typography>
                      </div>
                    </div>
                    <div style={{ paddingLeft: "4px" }}>
                      <Typography variant="small" color="neutral.b900">
                        2727 Palomar Road, Celina, TX-75009, United States
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex" }}>
                      <LocationIcon />
                      <div style={{ paddingLeft: "4px" }}>
                        <Typography variant="small" color="neutral.b900">
                          Bangladesh
                        </Typography>
                      </div>
                    </div>
                    <div style={{ paddingLeft: "4px" }}>
                      <Typography variant="small" color="neutral.b900">
                        House 8/A, Suite 5/A, Road 04, DOHS Banani, Dhaka
                        Cantonment, 1206, Bangladesh
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid  xs={12} sm={12} md={12} lg={6} className="cntbx">
              <div className="addr">
                <div>
                  <Typography variant="large" color="neutral.b900">
                    Email
                  </Typography>
                </div>
                <div>
                  <div style={{ display:'flex',alignItems:'center'}}>
                    <Typography variant="small" color="neutral.b900">
                    info@panoramamas.com
                    </Typography>
                    <button className="btncopy">Copy</button>
                  </div>
                </div>
              </div>
              <div className="addr">
                <div>
                  <Typography variant="large" color="neutral.b900">
                    Phone
                  </Typography>
                </div>
                <div>
                  <div style={{ display:'flex',alignItems:'center'}}>
                    <Typography variant="small" color="neutral.b900">
                    (+880) 1778-453898
                    </Typography>
                    <button className="btncopy">Copy</button>
                  </div>
                  <div style={{ display:'flex',alignItems:'center'}}>
                    <Typography variant="small" color="neutral.b900">
                    (+880) 1778-453898
                    </Typography>
                    <button className="btncopy">Copy</button>
                  </div>
                </div>
              </div>
              <div className="addr">
                <div>
                  <Typography variant="large" color="neutral.b900">
                    Socials
                  </Typography>
                </div>
                <div>
                  <div style={{ display:'flex',paddingTop:'16px',paddingBottom:'16px'}} className='scial'>
              <FB/>
              <IG/>
              <LD/>
              <TW/>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
