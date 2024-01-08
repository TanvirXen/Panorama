import React,{useState} from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import Grid from "@mui/material/Grid";
const CustomForm = ({ status, message, onValidated }) => {
  const [email, setemail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    email;
    email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };
  return (
    <div className="news">
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid md={6}>
            <div className="stay">
              <Typography variant="h2R" color="neutral.b900">
                Stay tuned for the latest updates and news from us!
              </Typography>
            </div>
          </Grid>
          <Grid md={6}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="stays">
                <Typography variant="large" color="neutral.b200">
                  Recieve the most valuable updates and stay constantly informed
                  by having them delivered directly to your inbox!
                </Typography>
                <div>
                  <TextInput
                    id="text-input-1"
                    type="text"
                    size="lg"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div style={{paddingBottom:'24px'}}>
                  <Button
                    kind="primary"
                    size="lg"
                    type="submit"
                    formValues={[email]}
                  >
                    Submit
                  </Button>
                </div>
                {status === "sending" && (
              <p style={{ color: "#2461FF" }}>
                Your currently being subscribed to our mailing list.
              </p>
            )}
            {status === "error" && (
              <p
                style={{ color: "red" }}
                dangerouslySetInnerHTML={{ __html: message }}
              ></p>
            )}
            {status === "success" && (
              <p
                style={{ color: "green" }}
                dangerouslySetInnerHTML={{ __html: message }}
              ></p>
            )}
            {status === null && (
              <p>
              
              </p>
            )}
              </div>
            </form>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default CustomForm;
