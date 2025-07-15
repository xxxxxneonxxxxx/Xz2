import React from "react";
import titleRight from './img/title-right.png';
import titleLeft from './img/title-left.png';
import './title.css';
import {motion} from 'framer-motion';

export default function Title() {
    return (
        <section className="title">
            <img src={titleLeft} alt="Decor Right" className="title__image title__image--left" />
            <img src={titleRight} alt="Decor Left" className="title__image title__image--right" />

            <div className="title__content">
                <motion.label
                    className="title__heading"
                    initial={{y:50,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    Become the Blade. <br /> Defy the System.
                </motion.label>
                <motion.p
                    className="title__subtext"
                    initial={{y:50,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    Awaken in a city ruled by cybernetic tyranny. <br />
                    Slice through foes, run on walls, and rewrite your fate.
                </motion.p>

                <motion.div
                    className="title__buttons"
                    initial={{y:50,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <button className="title__button title__button--primary">Download</button>
                    <button className="title__button title__button--secondary">Read Docs</button>
                </motion.div>
            </div>
        </section>
    );
}