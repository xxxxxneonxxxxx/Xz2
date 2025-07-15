import React, {useRef, useState} from "react";
import Apex from "./img/Apex.png";
import Factory from "./img/Factory.png";
import Sity from "./img/sity.png";
import './infoMaps.css';
import {motion,useAnimation} from "framer-motion";

export default function InfoMaps() {
    const [infomaps,setInfomaps] = useState([
        {
            url: Factory,
            title: "Factory Complex",
            description: "A maze of industrial platforms, deadly machinery, and smoke-filled shafts guarding the path to the surface.",
        },
        {
            url: Sity,
            title: "Dharma City",
            description: "Neon-lit towers and holographic highways. A center of sleek technology and strict control over its citizens.",
        },
        {
            url: Apex,
            title: "Apex",
            description: "The tower’s cold summit. Where the climb ends and true trials of speed, precision, and willpower begin.",
        },
    ]);

    const controlsImgs=useRef([
        useAnimation(),
        useAnimation(),
        useAnimation(),
    ]).current;
    const controlsTexts=useRef([
        useAnimation(),
        useAnimation(),
        useAnimation()
    ]).current;
    const lastTriggerTime = useRef<number[]>([0, 0, 0]);

    return (
        <section className="info-maps">
            <label className="info-maps__title">Explore the Vertical World</label>

            <div className="info-maps__list">
                {infomaps.map((infomap, i) => (
                    <div
                        className="info-maps__item" key={i}
                        onMouseEnter={()=>{
                            if (Date.now() - lastTriggerTime.current[i] < 3000) return;

                            lastTriggerTime.current[i] = Date.now();
                            controlsImgs[i].start({
                                scale:[1,1.2],
                                transition:{
                                    duration:2,
                                    ease:"easeInOut",
                                }
                            })
                            controlsTexts[i].start({
                                y:[100,0],
                                opacity: 1,
                                transition:{
                                    duration:1.2,
                                    ease:"linear",
                                }
                            })
                        }}
                        onMouseLeave={()=>{
                            controlsImgs[i].start({
                                scale:1,
                                transition:{
                                    duration:1.2,
                                    ease:"easeInOut",
                                },
                            })
                            controlsTexts[i].start({
                                y:100,
                                opacity: 1,
                                transition:{
                                    duration:1.2,
                                    ease:"linear",
                                }
                            })
                        }}
                    >
                        <motion.div className="info-maps__image"
                             animate={controlsImgs[i]}>
                            <img src={infomap.url}
                                        alt={infomap.title}
                            />
                        </motion.div>
                        <label className="info-maps__label">{infomap.title}</label>
                        <motion.p
                            className="info-maps__desc"
                            initial={{ y: 100, opacity: 0 }}
                            animate={controlsTexts[i]}
                        >
                            {infomap.description}
                        </motion.p>
                    </div>
                ))}
            </div>
        </section>
    );
}