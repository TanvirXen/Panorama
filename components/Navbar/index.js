import React, { useState, useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ChevronDown from "../svg/chevronDown";
import {
	TextInput,
	Select,
	SelectItem,
	Checkbox,
	Button,
	SideNav,
	SideNavItems,
	Fade,
	SideNavMenu,
	SideNavMenuItem,
	SideNavLink,
} from "@carbon/react";
import useWindowDimensions from "../reUse/WindowDimension.js";
import HamburgerOpen from "../reUse/hamburgerOpen";
import useWindowSize from "../reUse/WindowDimension.js";
import { styled, alpha } from "@mui/material/styles";
// import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import ServiceData from "../Sections/LandingPage/services/serviceData";

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "left",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "left",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		color:
			theme.palette.mode === "light"
				? "rgb(55, 65, 81)"
				: theme.palette.grey[300],
		boxShadow:
			"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
		"& .MuiMenu-list": {
			padding: "4px 0",
		},
		"& .MuiMenuItem-root": {
			"& .MuiSvgIcon-root": {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			//   "&:active": {
			//     backgroundColor: alpha(
			//       theme.palette.primary.main,
			//       theme.palette.action.selectedOpacity
			//     ),
			//   },
		},
	},
}));
import { useRouter } from "next/navigation";
import Link from "next/link";
import HamburgerClose from "../reUse/hamburgerClose";
import LeftArrow from "../reUse/LeftArrow";
import ServiceType from "../Sections/LandingPage/services/serviceType";
export default function Navbar() {
	const dropdownRef = useRef(null);
	const router = useRouter();
	//Solutions

	const [menuOpen, setmenuOpen] = useState(false);

	const [selectedSate, setselectedSate] = useState("");

	return (
		<div>
			<div className="nav">
				<Container maxWidth="xl">
					<div className="navpc">
						<div className="lgtxt">
							<img src="/logoFull.svg" alt="" srcset="" />
						</div>
						<ul className={menuOpen ? "menu pcMenu" : "menu mobileMenu"}>
	
								<>
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>
										<Link href="/about">About Us</Link>
									</li>
									{/* <li>
                      <Link href="/">Knowledge Hub</Link>
                    </li> */}
									<li>
										<Link href="/faq">FAQ</Link>
									</li>
									<li>
										<Link href="/pricing">Pricing</Link>
									</li>
									<li onClick={() => setselectedSate("solutions")}>
										<a>Services</a>
										<ChevronDown />
										<ul className="submenu">
											{ServiceType.map((e) => {
												return (
													<li key={e.type}>
														<Link href={e.url}>{e.type}</Link>
													</li>
												);
											})}
										</ul>
									</li>
								</>
					
						</ul>
						<div className="navpcsec">
							{/* <Button kind="ghost" size="md" className='btns' >Log in</Button> */}
							<Button
								kind="primary"
								size="md"
								className="btnss"
								onClick={() => window.open("https://test.agsmcs.info/")}
							>
								Get Started
							</Button>
							<div className="bars" onClick={() => setmenuOpen(!menuOpen)}>
								{menuOpen ? <HamburgerClose /> : <HamburgerOpen />}
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}
