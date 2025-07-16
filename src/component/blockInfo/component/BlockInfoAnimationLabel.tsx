import React from "react";
import {motion} from "framer-motion";
import {BlockInfoProps} from "../BlockInfo";

type Props = {
    item:BlockInfoProps;
    i:number;
    controlsLines:any;
    controlsLabels:any;
}

export default function BlockInfoAnimationLabel({item,i,controlsLines}: Props) {
    return (
            <motion.div className="block-info__header"
                        onMouseEnter={() =>{
                            controlsLines[i].start({
                                width:item.width,
                                borderTopLeftRadius:"10px",
                                borderBottomLeftRadius:"10px",
                                backgroundPosition: "100% 200%",
                                transition: {
                                    duration: 1,
                                    ease: "linear"
                                }
                            })
                        }}
                        onMouseLeave={() =>{
                            controlsLines[i].start({
                                width:"3px",
                                borderTopLeftRadius:"2px",
                                borderBottomLeftRadius:"2px",
                                backgroundPosition: "0% 0%",
                                transition: {
                                    duration: 1,
                                    ease: "linear"
                                }
                            })
                        }}
            >
                <motion.div
                    style={{
                        background: item.gradient,
                        backgroundSize: "150% 100%",
                        backgroundPosition: "0% 0%",
                        backgroundRepeat: "no-repeat",
                        borderBottomRightRadius:"2px",
                        borderTopRightRadius:"2px",
                    }}
                    className="block-info__line"
                    animate={controlsLines[i]}
                />
                <motion.label
                    className="block-info__label"
                >
                    {item.Title}
                </motion.label>
            </motion.div>

    )
}