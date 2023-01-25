import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ChevronDown from "../svg/chevronDown";
import { TextInput, Select, SelectItem, Checkbox, Button } from "@carbon/react";
import useWindowDimensions from '../reUse/WindowDimension'
import HamburgerOpen from "../reUse/hamburgerOpen";
export default function Navbar() {
	const { height, width } = useWindowDimensions();
	console.log(width)
	return (
		<div>
{width>1080?     (    <div className="nav">
		<Container maxWidth="xl">
			<div className="navpc">
				<div className="lgtxt">
					<img src="/logoFull.svg" alt="" srcset="" />
                    <div className="line">

                    </div>
                    <Typography variant="small" color="b800">
						Assesment 
					</Typography>
                
					<Typography variant="small" color="b800">
						Solutions <ChevronDown/>
					</Typography>
					<Typography variant="small" color="b800">
						Consulting <ChevronDown/>
					</Typography>
					<Typography variant="small" color="b800">
						Capital <ChevronDown/>
					</Typography>
					<Typography variant="small" color="b800">
						More <ChevronDown/>
					</Typography>
				</div>
				<div className="navpcsec">
                <Button kind="ghost" size="md" className='btns' >Log in</Button>
                <Button kind="primary" size="md" className='btnss' >Get Started</Button>
				</div>
			</div>
		</Container>
        </div>):
(<div className="mobNav">
<Container maxWidth="xl">
<div className="mnba" >
<div>
<img src="/logoFull.svg" alt="" srcset="" />
</div>
<div className="nma">
	<HamburgerOpen/>
</div>
</div>
	
		</Container>
</div>)
	}
		</div>)
}
