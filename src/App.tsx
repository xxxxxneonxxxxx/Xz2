import React from "react";
import Header from "./component/header/Header";
import Title from "./component/title/Title";
import BlockNumber from "./component/blockNumber/BlockNumber";
import BlockInfo from "./component/blockInfo/BlockInfo";
import Slader from "./component/slader/Slader";
import InfoMaps from "./component/infoMaps/InfoMaps";
import KakaetoXrenVNizy from "./component/kakaetoXrenVNizy/KakaetoXrenVNizy";
import Fotter from "./component/footer/Fotter";


export default function App(){
    return (
        <div>
            <Header />
            <Title />
            <BlockNumber />
            <BlockInfo />
            <Slader />
            <InfoMaps />
            <KakaetoXrenVNizy />
            <Fotter />
        </div>
    )
}