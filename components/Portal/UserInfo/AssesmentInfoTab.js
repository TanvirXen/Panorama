import React from "react";
import Typography from "@mui/material/Typography";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TextInput,
  Select,
  SelectItem,
  Checkbox,
  Button,
  Tag,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@carbon/react";
import Grid from "@mui/material/Grid";
export default function AssesmentInfoTab() {
  const rows = [
    {
      id: "63dec30ebf76d42fcf03ef71",
      user: "Marisol Chaney",
      company: "RECOGNIA",
      version: "2020-10-10T11:55:42 -06:00",
    },
    {
      id: "63dec30eef29440b58dd31bc",
      user: "Maynard Mills",
      company: "ELPRO",
      version: "2019-04-30T10:54:49 -06:00",
    },
    {
      id: "63dec30e667dca45c50ff4ec",
      user: "Saundra Livingston",
      company: "OHMNET",
      version: "2019-05-10T09:58:29 -06:00",
    },
    {
      id: "63dec30e58e17075d52fa970",
      user: "Elnora Rios",
      company: "AFFLUEX",
      version: "2017-03-12T03:00:11 -06:00",
    },
    {
      id: "63dec30e701ab7f2c223969a",
      user: "Viola Wooten",
      company: "ENERSAVE",
      version: "2018-12-18T12:44:59 -06:00",
    },
    {
      id: "63dec30e12700605d56fda92",
      user: "Walters Tanner",
      company: "BYTREX",
      version: "2019-06-21T06:11:34 -06:00",
    },
  ];
  const headers = ["User", "Company", "Version", "Action"];

  return (
    <TabPanel>
      <div className="assTab">
        <Typography variant="h4B" color="neutral.b800">
          Assesments
        </Typography>{" "}
      </div>{" "}
      <div className="asstabtable">
        {" "}
        <Table size="lg" useZebraStyles={false}>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader id={header.key} key={header}>
                  {header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                {Object.keys(row)
                  .filter((key) => key !== "id")
                  .map((key) => {
                    return <TableCell key={key}>{row[key]}</TableCell>;
                  })}
                <TableCell>
                  <Button
                    kind="primary"
                    size="sm"
                    className="btnss"
                    onClick={() => handleNext()}
                  >
                   Review
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TabPanel>
  );
}
