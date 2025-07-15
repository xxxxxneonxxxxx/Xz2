import React, { useState } from "react";
import './blockNumber.css'
import {motion} from "framer-motion";


type BlockNumberInfo = {
    number: string;
    description: string;
};

export default function BlockNumber() {
    const [info, setInfo] = useState<BlockNumberInfo[]>([
        { number: '18.2M+', description: "Enemies Eliminated" },
        { number: '104K+', description: "Players in Ghostrunner Network" },
        { number: '0.0008s', description: "Avg Time to Die" },
    ]);

    return (
        <section className="block">
            <div className="block__text">
                <motion.p
                    className="block__intro"
                    initial={{x:-100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    You’re not alone. Thousands<br/>
                    are slicing through Dharma<br/>
                    Tower as we speak.<br/>
                </motion.p>
            </div>

            <motion.div
                className="block__info"
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
            >
                {info.map((value, index) => (
                    <div className="block__item" key={index}>
                        <motion.label
                            className="block__number"
                            animate={{ backgroundPosition: ["0%", "50%", "100%","50%",'0%'] }}
                            transition={{
                                duration: 5,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {value.number}
                        </motion.label>
                        <p className="block__desc">{value.description}</p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}