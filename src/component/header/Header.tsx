import React from "react";
import logo from './img/image 1.png';
import checkMark from './img/checkMark.svg';
import './header.css';
import {motion} from "framer-motion";

export default function Header() {
    return (
        <header
            className="header"
        >
            <motion.img
                src={logo} alt="Logo" className="header__logo"
                initial={{y:-50,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
            />

            <motion.nav
                className="header__nav"
                initial={{y:-50,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
            >
                <div className="header__item">
                    <span className="header__label">Learn</span>
                    <img src={checkMark} alt="▼" className="header__icon" />
                </div>
                <div className="header__item">
                    <span className="header__label">Community</span>
                    <img src={checkMark} alt="▼" className="header__icon" />
                </div>
            </motion.nav>
        </header>
    );
}