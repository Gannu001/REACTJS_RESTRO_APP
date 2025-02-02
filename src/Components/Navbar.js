/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/GO FOOD.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { HiOutlineSearch, HiOutlineHeart, HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";
// import { HiOutlineBars3 } from "react-icons/hi2";
import "./Navbar.css";
import { FiArrowRight } from "react-icons/fi";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container" style={{marginLeft:"10.5em"}}>
        <a href="">Home</a>
        <a href="">Groceries</a>
        <a href="">Pages</a>
        <a href="">Connect with us <FiArrowRight/></a>
        <div className="icon-container" style={{marginLeft:"10em"}}>
          <div className="icon-wrapper">
            <HiOutlineHeart className="navbar-icon heart" />
          </div>
          <div className="icon-wrapper">
            <HiOutlineSearch className="navbar-icon search" />
          </div>
          <div className="icon-wrapper">
            <HiOutlineUser className="navbar-icon user" />
          </div>
          <div className="icon-wrapper">
            <HiOutlineShoppingBag className="navbar-icon bag" />
          </div>
        </div>
       
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      
    </nav>
  );
};

export default Navbar;
