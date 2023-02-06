import React from "react";
import Grid from "@mui/material/Grid";
import styles from "../styles/signin.module.scss";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import { yupResolver } from "@hookform/resolvers/yup";
import GoogleIcon from "../public/google.svg";
import FacebookIcon from "../components/svg/facebook";
import ButtonGL from "../components/reUse/buttonGl";
import ButtonFB from "../components/reUse/buttonFb";
import { useForm } from "react-hook-form";
import { signUp_schema } from "../components/signup/signschema";
import axios from "axios";
import API_LIST from "../components/reUse/apiList";
export default function Signin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUp_schema),
  });
  const onSubmit = (data) => {
    // fetch(API_LIST.getCurrency)
    // fetch(API_LIST.signup, {
    //   method: 'post',
    //   headers: {'Content-Type':'application/json'},
    //   body:{
    //       jsonrpc: "2.0",
    //       params: {
    //         email: data.email,
    //         login: data.email,
    //         password: data.password,
    //         name: data.name,
    //       },
    //     }
    //  });
    console.log(data);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let signup_final_object = {
      jsonrpc: "2.0",
      params: {
        email: data.email,
        login: data.email,
        password: data.password,
        name: data.name,
      },
    };
    axios
      .post(API_LIST.signup, signup_final_object, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  console.log(errors);
  return (
    <div style={{ minHeight: "100vh", minWidth: "100%" }}>
      <Grid container>
        <Grid item xl={5} lg={5} md={12} className={styles.bg}>
          <div className={styles.pd}>
            <div className={styles.pdt}>
              <Image
                src="/pdt.svg"
                alt="Picture of the author"
                layout="responsive"
                width={300}
                height={450}
              />
            </div>
          </div>
        </Grid>
        <Grid item xl={7} lg={7} md={12}>
          <div className={styles.cont}>
            <Image src="/logoFull.svg" alt="image" width={180} height={120} />
            <div className={styles.form}>
              <Typography variant="base" color="initial">
                Get a grip on your business.
              </Typography>
              <Typography variant="h4" color="neutral.b600">
                Sign up to Panorama.
              </Typography>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.cont1}>
                <div className={styles.txtc}>
                  <TextInput
                    className="txtF"
                    id="text-input-1"
                    type="text"
                    labelText="Email"
                    placeholder="Email"
                    invalid={errors.email ? true : false}
                    invalidText={errors.email?.message}
                    {...register("email", { required: true })}
                  />
                </div>
                <div className={styles.txtc}>
                  <TextInput
                    className="txtF"
                    id="text-input-1"
                    type="text"
                    labelText="Full Name"
                    placeholder="Full Name"
                    invalid={errors.name ? true : false}
                    invalidText={errors.name?.message}
                    {...register("name", { required: true })}
                  />
                </div>
                <div className={styles.txtc}>
                  <Select
                    id="select-1"
                    defaultValue="placeholder-item"
                    labelText="Country"
                    invalid={errors.country ? true : false}
                    invalidText={errors.country?.message}
                    {...register("country", { required: true })}
                  >
                    <SelectItem
                      disabled
                      hidden
                      value="placeholder-item"
                      text="Country"
                    />
                    <SelectItem value="option-1" text="Option 1" />
                    <SelectItem value="option-2" text="Option 2" />
                    <SelectItem value="option-3" text="Option 3" />
                  </Select>
                </div>
                <div className={styles.txtc}>
                  <TextInput
                    className="txtF"
                    id="text-input-1"
                    type="password"
                    labelText="Password"
                    placeholder="Password"
                    invalid={errors.password ? true : false}
                    invalidText={errors.password?.message}
                    {...register("password", { required: true })}
                  />
                </div>
                <div className={styles.txtcc}>
                  <Checkbox
                    labelText={`I don't want to receive emails about Mailchimp and related Intuit product and feature updates, marketing best practices, and promotions from Mailchimp.`}
                    id="checkbox-label-1"
                    invalid={errors.marketing_email ? true : false}
                    invalidText={errors.marketing_email?.message}
                    {...register("marketing_email", { required: true })}
                  />
                </div>
                <div className={styles.txtcc}>
                  <Typography variant="small" color="initial">
                    By creating an account, you agree to our Terms and have read
                    and acknowledged the Global Privacy Statement.
                  </Typography>
                </div>
                <div style={{ display: "flex", paddingTop: "12px" }}>
                  <div style={{ paddingRight: "8px" }}>
                    <Button type="submit">Create Account</Button>
                  </div>
                  <div style={{ paddingRight: "8px" }}>
                    <ButtonGL />
                  </div>
                  <div style={{ paddingRight: "8px" }}>
                    <ButtonFB />
                  </div>
                </div>
                <div className={styles.txtccc}>
                  <Typography variant="small" color="initial">
                    Invisible reCAPTCHA by Google <a href="#">Privacy Policy</a>{" "}
                    and <a href="#">Terms of Use</a> .
                  </Typography>
                </div>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
