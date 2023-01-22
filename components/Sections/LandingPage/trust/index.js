import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LeftArrow from "../../../../components/reUse/LeftArrow";
import RightArrow from "../../../../components/reUse/RightArrow";
import Invert from "../../../reUse/invert";
import { useState } from "react";
export default function Trust() {
	const [gallery, setgallery] = useState([
		{
			img: "https://cdn.pixabay.com/photo/2022/11/04/04/11/ocean-7568980_960_720.jpg",
			name: "Jerin Akhter",
			title: "CFO",
			company: "R-Ventures",
			review:
				"Diagnosing what is wrong with businesses is expensive, time-sensitive, and hectic which stands in the way to solve the problems you are facing.”",
			profile:
				"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1985&q=80",
		},
		{
			img: "https://cdn.pixabay.com/photo/2023/01/10/20/56/nyc-7710506_960_720.jpg",
			name: "Rifat Anik",
			title: "Product Manager",
			review:
				"Diagnosing what is wrong with businesses is expensive, time-sensitive, and hectic which stands in the way to solve the problems you are facing.”",
			company: "Panorama",
			profile:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		},
		{
			img: "https://cdn.pixabay.com/photo/2023/01/07/23/07/forest-7704236_960_720.jpg",
			name: "Rifat Ara Bonnyh",
			title: "Marketing",
			review:
				"Diagnosing what is wrong with businesses is expensive, time-sensitive, and hectic which stands in the way to solve the problems you are facing.”",
			company: "Panorama",
			profile:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		},
	]);
	const [selec, setselec] = useState(0);
	const [sel, setsel] = useState({ ...gallery[0] });
	const [load, setload] = useState("");

	useEffect(() => {
		if(selec===-1){
			let r = gallery.length-1;
			setselec(r);
			setsel(gallery[r]);
			setload("");
			return
		}
		if(selec===gallery.length){
			let r = 0;
			setselec(r);
			setsel(gallery[r]);
			setload("");
			return
		}
		if (load === "false") {
			let i = selec;
			let r = i - 1;
			setselec(r);
			setsel(gallery[r]);
			setload("");
		}
		if (load === "true") {
			let i = selec;
			let r = i + 1;
			setselec(r);
			setsel(gallery[r]);
			setload("");
		}
	}, [load]);
	console.log(sel);
	console.log(selec);
	console.log(gallery.length)

	return (
		<div className="trust">
			<Container maxWidth="xl">
				<Grid container spacing={0}>
					<Grid md={8}>
						<div className="trst">
							<Typography variant="h1R" color="neutral.b900">
								We are trusted by the best
							</Typography>

							<div>
								<Typography variant="large" color="neutral.b200">
									Diagnosing what is wrong with businesses is expensive,
									time-sensitive, and hectic which stands in the way to solve
									the problems you are facing.
								</Typography>
							</div>
						</div>
					</Grid>
					<Grid md={4}>
						<div className="trstcont">
							<LeftArrow fx={setload} />
							<RightArrow fx={setload} />
						</div>
					</Grid>
					<Grid md={12}>
						<div className="play">
							<div className="Player">
								<div className="imgg">
									<img src={sel?.img} alt="" />
								</div>
								<div className="right">
									<Invert />
									<div className="rte">
										<Typography variant="large" color="neutral.b200">
											{sel?.review}
										</Typography>
									</div>
									<div className="pte">
										<div className="pre">
											<img src={sel?.profile} alt="" />
											<div className="txt">
												<div>
													<Typography variant="baseb" color="neutral.b600">
														{sel?.name}
													</Typography>
												</div>
												<div>
													<Typography variant="xsmall" color="neutral.b400">
														{sel?.title}
													</Typography>
												</div>
												<div>
													<Typography variant="xsmall" color="neutral.b400">
														{sel?.company}
													</Typography>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
