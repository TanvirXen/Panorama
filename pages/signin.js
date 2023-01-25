import React from "react";
import Grid from "@mui/material/Grid";
import styles from "../styles/signin.module.scss";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";

import GoogleIcon from "../public/google.svg";
import FacebookIcon from "../components/svg/facebook";
import ButtonGL from "../components/reUse/buttonGl";
import ButtonFB from "../components/reUse/buttonFb";

export default function Signin() {
	return (
		<div style={{ minHeight: "100%", minWidth: "100%" }}>
			<Grid container>
				<Grid item xl={5} lg={5} md={5} className={styles.bg}>
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
				<Grid item xl={7} lg={7} md={7}>
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
						<div className={styles.cont1}>
							<div className={styles.txtc}>
								<TextInput
									className="txtF"
									id="text-input-1"
									type="text"
									labelText="Email"
									placeholder="Email"
								/>
							</div>
							<div className={styles.txtc}>
								<TextInput
									className="txtF"
									id="text-input-1"
									type="text"
									labelText="Full Name"
									placeholder="Full Name"
								/>
							</div>
							<div className={styles.txtc}>
								<Select
									id="select-1"
									defaultValue="placeholder-item"
									labelText="Country"
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
								/>
							</div>
							<div className={styles.txtcc}>
								<Checkbox
									labelText={`I don't want to receive emails about Mailchimp and related Intuit product and feature updates, marketing best practices, and promotions from Mailchimp.`}
									id="checkbox-label-1"
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
									<Button>Create Account</Button>
								</div>
								<div style={{ paddingRight: "8px" }}>
									<ButtonGL/>
								</div>
								<div style={{ paddingRight: "8px" }}>
									<ButtonFB/>
								</div>
							</div>
							<div className={styles.txtccc}>
								<Typography variant="small" color="initial">
								Invisible reCAPTCHA by Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a> .

								</Typography>
							</div>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
