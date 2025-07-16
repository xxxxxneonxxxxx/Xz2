import React,{useState,useRef} from "react";
import dot from './img/dot.svg'
import './blockInfo.css'
import {motion,useAnimation}  from "framer-motion";
import BlockInfoAnimationLabel from "./component/BlockInfoAnimationLabel";
import bg from './img/bg.png'


export type BlockInfoProps = {
    Title:string;
    description:string;
    number:string;
    descriptionNumber:string;
    color:string;
    width:string;
    gradient:string;
}


export default function BlockInfo() {
    const [blockInfo, setBlockInfo] = useState<BlockInfoProps[]>([
        {
            Title: "Fast",
            description: "Instant-response movement. Blink, dash, strike — before your enemy loads a thought.",
            number: "3,000+",
            descriptionNumber: "ACTIONS PER SECOND",
            color: '#1FCFF1',
            width:"193px",
            gradient: 'linear-gradient(90deg, #1FCFF1 0%, #000000 100%)',
        },
        {
            Title: "Decentralized",
            description: "Upgrades. Implants. Reflex boosters. The system bends to your enhancement tree.",
            number: "92",
            descriptionNumber: "SKILL MODS AND UPGRADES",
            color:'#C4A600',
            width:"193px",
            gradient:'linear-gradient(90deg, #C4A600 0%, #000000 100%)',
        },
        {
            Title: "Efficient",
            description: "You’re not the only one fighting. Other Ghostrunners are operating independently in other sectors.",
            number: "4",
            descriptionNumber: "ESISTANCE CELLS ACROSS DHARMA TOWER",
            color:'#19FB9B',
            width:'193px',
            gradient:'linear-gradient(90deg, #19FB9B 0%, #000000 100%)',
        },
        {
            Title: "Scalable",
            description: "Your katana doesn’t run on gasoline. But it does slice through armored cyborgs like butter.",
            number: "0%",
            descriptionNumber: "WASTED TIME",
            color:"#9945FF",
            width:'193px',
            gradient:"linear-gradient(90deg, #9945FF 0%, #000000 100%)",
        }
    ]);
    const controlsLines = useRef([
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation()
    ]).current;

    const controlsLabels = useRef([
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation()
    ]).current;
    return (
        <section className="block-info"
                 style={{
                     backgroundImage: `url(${bg})`
                 }}
        >
            <div className="block-info__intro">
                <label className="block-info__title">
                    Built for ruthless <br/> efficiency.
                </label>
                <div className="block-info__subtitle">
                    <img src={dot} alt="dot" className="block-info__dot" />
                    <label className="block-info__tagline">
                        LIVE MISSION TELEMETRY
                    </label>
                </div>
            </div>

            <div className="block-info__list">
                    {blockInfo.map((item, i) => (
                        <div
                            className={`block-info__item`}
                            style={{
                                marginTop: i===0||i===2 ? '15%' : '0',
                                marginBottom: i===1||i===3 ? '15%' : '0',

                            }}

                        >
                            <BlockInfoAnimationLabel controlsLabels={controlsLabels} i={i} item={item} controlsLines={controlsLines} key={i}/>

                            <label className="block-info__description">
                                {item.description}
                            </label>

                            <div className="block-info__number-wrap">
                                <img src={dot} alt="dot" className="block-info__dot" />
                                <label className="block-info__number">{item.number}</label>
                            </div>

                            <label className="block-info__meta">
                                {item.descriptionNumber}
                            </label>
                        </div>
                    ))}
            </div>

        </section>
    );
}