import React, {useRef, useState} from "react";
import card1 from "./img/card1.png";
import card2 from "./img/card2.png";
import card3 from "./img/card3.png";
import card4 from "./img/card4.png";
import card5 from "./img/card5.png";
import "./slader.css";
import {motion,AnimatePresence} from "framer-motion";

type SladerProps = {
    url:string,
    titleCard:string,
    description:string,
    urlDescription1:string,
    urlDescription2:string,
}
type SladerTitle = {
    title:string,
}

export default function Slader(){
    const [sladerData,setSladerData] =useState<SladerProps[]>([
        {
            url: card1,
            titleCard: "Every Ghostrunner is unique.",
            description:
                "Customize your Ghostrunner with neural uplinks, reflex boosters, and energy cores. Each implant changes your style—speed, power, stealth—letting you forge a unique build that defines how you ascend and survive.",
            urlDescription1: "Learn more about implants",
            urlDescription2: "Combat module library",
        },
        {
            url: card2,
            titleCard: "Deadly by design.",
            description:
                "Master three core abilities: Blink for instant dash strikes, Tempest to repel enemies and projectiles, and Overdrive for powerful ranged slashes. Chain them with perfect timing—one slip, and it’s over.",
            urlDescription1: "View ability list",
            urlDescription2: "Watch combat preview",
        },
        {
            url: card3,
            titleCard: "Built to adapt.",
            description:
                "Choose preset builds: Blade Dancer for speed combos, Tank for durability, or Hacker with ranged utility. Each loadout blends modules balancing Speed, Power, Control—and fits your flow and style strategy.",
            urlDescription1: "View preset builds",
            urlDescription2: "Optimize your loadout",
        },
        {
            url: card4,
            titleCard: "Access granted.",
            description:
                "Access Dharma Tower’s hidden logs—core_memo_014.txt, AI transcripts, and blueprints. Uncover the Ghostrunner project’s secrets, system architecture, and past operatives’ fate. Cyber-lore that enriches your climb through the tower.",
            urlDescription1: "Browse recovered logs",
            urlDescription2: "Explore tower history",
        },
        {
            url: card5,
            titleCard: "Master the flow.",
            description:
                "Step into the VR simulation to master parkour and combat drills: chain dashes, wall-runs, timing strikes, blocks mid-air. This sandbox hones reflexes and muscle memory—only rhythm and movement remain.",
            urlDescription1: "Start tutorial session",
            urlDescription2: "View movement guide",
        }
    ]);
    const [titleCard, setTitleCard] = React.useState<SladerTitle[]>([
        {title:'Implants'},
        {title:'Combat'},
        {title:'Loadout'},
        {title:'Archive'},
        {title:'Training'}
    ]);

    const [activId, setActivId] = useState<number>(0);

    return (
        <section className="slader">
                {titleCard.map((item, index) => (
                    <div className="slader__header"
                         style={{display:activId===index?'':'none'}}
                    >
                        <h2 className="slader__title">{item.title}</h2>
                        <div className="slader__tabs">
                            {titleCard.map((item, index) => (
                                <motion.button
                                    className={`slader__tab`}
                                    key={index}
                                    onClick={() => {
                                        setActivId(index)

                                    }}
                                    initial={{
                                        border: activId === index ? "1px solid var(--tab-border)" : "",
                                    }}
                                    animate={{
                                        border: activId === index ? "1px solid var(--tab-border)" : "",
                                    }}
                                >
                                    {item.title}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                ))}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activId}
                    className="slader__card"
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <motion.img
                        src={sladerData[activId].url}
                        alt={sladerData[activId].titleCard}
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="slader__image"
                    />
                    <motion.div
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -10, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="slader__text"
                    >
                        <h3 className="slader__card-title">{sladerData[activId].titleCard}</h3>
                        <p className="slader__description">{sladerData[activId].description}</p>
                        <div className="slader__links">
                            <a href="#" className="slader__link">{sladerData[activId].urlDescription1}</a>
                            <a href="#" className="slader__link">{sladerData[activId].urlDescription2}</a>
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}