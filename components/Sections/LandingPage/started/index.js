import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
export default function Started() {
	return (
		<div className="started">
			<Container maxWidth="xl">
				<div className="strt">
					<div className="redy">
						<Typography variant="h1R" color="neutral.b0">
						Ready to start?
						</Typography>
					</div>

					<div>
						<Typography variant="large" color="neutral.b0">
						Consult with our team to tailor the perfect business solution.
						</Typography>
						<div className="talk">
							<Button kind="primary" size="lg" className="btnss">
								Learn More
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
