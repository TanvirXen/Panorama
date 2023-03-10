import React, { useState ,useEffect} from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import ServiceData from "./serviceData";
import CardService from "./card";
export default function Service() {
  const [selected, setselected] = useState("Assessment");
  const [serData, setserData] = useState(ServiceData);
  useEffect(() => {
    var newArray = ServiceData.filter(function (el) {
      return el.type == "Assessment";
    });
    setserData(newArray);
  }, [])
  
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid xs={12} sm={12} md={12}>
            <div className="trst">
              <Typography variant="large" color="neutral.b200">
                Our Solutions
              </Typography>
              <br />
              <Typography variant="h1R" color="neutral.b900">
                We drive impact through...
              </Typography>
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={12} xl={4}>
            <div className="srv">
              <div
                className={selected == "Assessment" ? "pfrs" : "pfr"}
                onClick={() => {
                  setselected("Assessment");
                  var newArray = ServiceData.filter(function (el) {
                    return el.type == "Assessment";
                  });
                  setserData(newArray);
                }}
              >
                <Typography variant="large" color="neutral.b900">
                  Assesment
                </Typography>
              </div>
              <div
                className={selected == "Solutions" ? "pfrs" : "pfr"}
                onClick={() => {
                  setselected("Solutions");
                  var newArray = ServiceData.filter(function (el) {
                    return el.type == "Solutions";
                  });
                  setserData(newArray);
                }}
              >
                <Typography variant="large" color="neutral.b900">
                  Solutions
                </Typography>
              </div>
              <div
                className={selected == "Consulting" ? "pfrs" : "pfr"}
                onClick={() => {
                  setselected("Consulting");
                  var newArray = ServiceData.filter(function (el) {
                    return el.type == "Consulting";
                  });
                  setserData(newArray);
                }}
              >
                <Typography variant="large" color="neutral.b900">
                  Consulting
                </Typography>
              </div>
              <div
                className={selected == "Knowledge" ? "pfrs" : "pfr"}
                onClick={() => {
                  setselected("Knowledge");
                  var newArray = ServiceData.filter(function (el) {
                    return el.type == "Knowledge";
                  });
                  setserData(newArray);
                }}
              >
                <Typography variant="large" color="neutral.b900">
                  Knowledge
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid container spacing={0} md={12} lg={12} xl={8}>
            {serData.map((e) => {
              return <CardService img={e.img} name={e.name} desc={e.desc} />;
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
