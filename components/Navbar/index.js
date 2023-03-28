import React, { useState, useEffect ,useRef} from "react";
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
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavMobile from "./mobile";
import { useOnHoverOutside } from './hoverHook'
import NavbarM from "./mobile";

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
export default function Navbar() {
  const dropdownRef = useRef(null);
  //Solutions
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //Consulting
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  //Capitals
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  //More
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  const { height, width } = useWindowSize();
  console.log(width);
  useOnHoverOutside(dropdownRef, handleClose3);
  return (
    <div>
      {width > 1080 ? (
        <div className="nav">
          <Container maxWidth="xl">
            <div className="navpc">
              <div className="lgtxt">
                <img src="/logoFull.svg" alt="" srcset="" />
                <div className="headerBar">

                </div>
                <div className="line"></div>
                <Typography
                  variant="small"
                  color="b800"
                  style={{ cursor: "pointer" }}
                >
                  Assesment
                </Typography>

                <Typography
                  variant="small"
                  color="b800"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  style={{ cursor: "pointer" }}
                  aria-expanded={open ? "true" : undefined}
                  disableElevation
                  onClick={handleClick}
                  //   endIcon={<KeyboardArrowDownIcon />}
                >
                  Solutions <ChevronDown />
                </Typography>
                <Typography
                  variant="small"
                  color="b800"
                  style={{ cursor: "pointer" }}
                  aria-controls={open1 ? "Consulting" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open1 ? "true" : undefined}
                  disableElevation
                  onClick={handleClick1}
                >
                  Consulting <ChevronDown />
                </Typography>
                <Typography
                  variant="small"
                  color="b800"
                  style={{ cursor: "pointer" }}
                  aria-controls={open2 ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open2 ? "true" : undefined}
                  disableElevation
                  onClick={handleClick2}
                >
                  Capital <ChevronDown />
                </Typography>
                <Typography
                  variant="small"
                  color="b800"
                  style={{ cursor: "pointer" }}
                  aria-controls={open3 ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open3 ? "true" : undefined}
                  disableElevation
                  onClick={handleClick3}
                  // onMouseOver={handleClick3}
                  // onMouseLeave={handleClose3}
                >
                  More <ChevronDown />
                </Typography>
              </div>
              <div className="navpcsec">
                {/* <Button kind="ghost" size="md" className='btns' >Log in</Button> */}
                <Button kind="primary" size="md" className="btnss">
                  Get Started
                </Button>
              </div>
              {/* Solution */}
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                autoFocus={false}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  Services
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                  Fractional CFO
                </MenuItem>
              </StyledMenu>
              {/* Counsulting */}
              <StyledMenu
                id="Consulting"
                MenuListProps={{
                  "aria-labelledby": "Consulting",
                }}
                anchorEl={anchorEl1}
                open={open1}
                autoFocus={false}
                onClose={handleClose1}
              >
                <MenuItem onClick={handleClose1} disableRipple>
                  Business Consulting
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose1} disableRipple>
                  Impact Measurement
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose1} disableRipple>
                  Research, Documentation <br /> and Development
                </MenuItem>
              </StyledMenu>
              {/* Capital */}
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl2}
                open={open2}
                autoFocus={false}
                onClose={handleClose2}
              >
                <MenuItem onClick={handleClose2} disableRipple>
                  Courses
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose2} disableRipple>
                  Events and Sessions
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose2} disableRipple>
                  Resources
                </MenuItem>
              </StyledMenu>
              {/* More */}
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl3}
                open={open3}
                autoFocus={false}
                onClose={handleClose3}
              >
                <MenuItem onClick={handleClose3} disableRipple>
                  About
                </MenuItem>
              </StyledMenu>
            </div>
          </Container>
        </div>
      ) : 
      (<NavbarM/>
        // <div className="mobNav">
        //   <Container maxWidth="xl">
        //     <div className="mnba">
        //       <div>
        //         <img src="/logoFull.svg" alt="" srcset="" />
        //       </div>
        //       <div className="nma">
        //         <HamburgerOpen />
        //       </div>
        //     </div>
        //   </Container>
        // </div>
      )
      }
    </div>
  );
}
