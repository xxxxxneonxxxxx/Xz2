import React from "react";
import dis from "./img/dis.svg";
import reddit from "./img/reddit.svg";
import twitter from "./img/twitter.svg";
import yt from "./img/yt.svg";
import logo from './img/image 1.png'
import "./fotter.css";

export default function Fotter() {
    return (
        <footer className="fotter">
            <div className="fotter__left">
                <img src={logo}/>
                <p className="fotter__powered">
                    Powered by One More Level &amp; 505 Games
                </p>
                <div className="fotter__icons">
                    <img src={yt} alt="YouTube" />
                    <img src={twitter} alt="Twitter" />
                    <img src={dis} alt="Discord" />
                    <img src={reddit} alt="Reddit" />
                </div>
                <p className="fotter__copyright">
                    © 2020–2023 Ghostrunner. All rights reserved.
                </p>
            </div>

            <div className="fotter__right">
                <div className="fotter__block">
                    <h3 className="fotter__title">GAME INFO</h3>
                    <ul>
                        <li>About the Game</li>
                        <li>System Requirements</li>
                        <li>Media / Screenshots</li>
                        <li>Patch Notes</li>
                        <li>Press Kit</li>
                    </ul>
                </div>
                <div className="fotter__block">
                    <h3 className="fotter__title">COMMUNITY</h3>
                    <ul>
                        <li>Join the Discord</li>
                        <li>Support</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="fotter__block">
                    <h3 className="fotter__title">🌐 EN</h3>
                </div>
            </div>
        </footer>
    );
}