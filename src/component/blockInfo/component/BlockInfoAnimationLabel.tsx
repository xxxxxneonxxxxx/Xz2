import React from "react";
import {motion} from "framer-motion";
import {BlockInfoProps} from "../BlockInfo";
import dot from "../img/dot.svg";
type Props = {
    item:BlockInfoProps;
    i:number;
    controlsLines:any;
    controlsLabels:any;
}

export default function BlockInfoAnimationLabel({item,i,controlsLabels,controlsLines}: Props) {
    return (
            <motion.div className="block-info__header"
                        onMouseEnter={() =>{
                            controlsLabels[i].start({
                                backgroundPosition: "100% 150%",
                                transition:{
                                    duration:1,
                                    ease:"easeInOut",
                                }
                            })
                            controlsLines[i].start({
                                width:"10px",
                                transition: {
                                    duration: 1,
                                    ease: "linear"
                                }
                            })
                        }

                        }

                        onMouseLeave={() =>{
                            controlsLabels[i].start({
                                backgroundPosition: "200% 0%",
                                borderRadius:"1px",
                                transition: {
                                    duration: 1.2,
                                    ease: "linear"
                                }
                            })
                            controlsLines[i].start({
                                    width:"3px",
                                    transition: {
                                        duration: 0.6,
                                        ease: "linear"
                                    }
                                }
                            )}}>
                <motion.div
                    style={{
                        background: item.color,
                    }}
                    className="block-info__line"
                    animate={controlsLines[i]}
                />
                <motion.label
                    animate={controlsLabels[i]}
                    initial={{
                        backgroundPosition: "200% 0%",
                    }}
                    style={{
                        background: item.gradient,
                        backgroundSize: "200% 100%",
                        backgroundPosition: "200% 0%",
                        backgroundRepeat: "no-repeat",
                        color: "#fff",
                    }}
                    className="block-info__label"
                >
                    {item.Title}
                </motion.label>
            </motion.div>

    )
}