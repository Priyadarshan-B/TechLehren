import React, { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CustomizedSwitches from "./toggleTheme";
import Button from "../Button/Button";
import LoginDialog from "../../pages/Login/Login";
import SignupDialog from "../../pages/Login/Signup";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import html from '../../assets/html.png'


function TopBar(props) {
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);

    const handleLoginOpen = () => setOpenLogin(true);
    const handleLoginClose = () => setOpenLogin(false);

    const handleSignupOpen = () => setOpenSignup(true);
    const handleSignupClose = () => setOpenSignup(false);
    return (
        <div
            className="app-topbar"
            style={{
                backgroundColor: "var(--background-1)",
                display: "flex",
                padding: "3px 7px",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid var(--border-color)",
                gap: 20,
                // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%"
                }}
            >
                <div onClick={props.sidebar} className="sidebar-menu">
                    <MenuIcon />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <MilitaryTechIcon sx={{ fontSize: "35px" }} className="techLehren-icon" />
                    <div>
                        <h2 className="app-name">TechLehren</h2>
                        <p style={{ fontFamily: "'Playpen Sans', cursive", fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>Limitless Learning</p>
                    </div>
                </div>

                <div className="top-bar-menus">
                    <CustomizedSwitches />
                    <div className="profile-section">
                        <img style={{ width: "45px", height: "45px", borderRadius: "50%" }} src={html} alt="" />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <b>DisplayName</b>
                            <p style={{fontSize:"14px", fontWeight:"600", color:"gray"}}>student</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Dialogs */}
            <LoginDialog open={openLogin} onClose={handleLoginClose} />
            <SignupDialog open={openSignup} onClose={handleSignupClose} />
        </div>
    );
}

export default TopBar;
