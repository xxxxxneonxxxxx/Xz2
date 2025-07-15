import React from "react";
import imges from "./img/IMAGE.png";
import "./kakaetoXrenVNizy.css";

export default function KakaetoXrenVNizy() {
    return (
        <section className="kakaeto">
            <img src={imges} alt="Background" className="kakaeto__bg" />
            <div className="kakaeto__content">
                <h1 className="kakaeto__title">
                    No more excuses. No more delays.
                    <br />
                    The tower is waiting. Are you fast enough?
                </h1>
                <button className="kakaeto__button">DOWNLOAD</button>
            </div>
        </section>
    );
}