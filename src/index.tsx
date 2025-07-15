import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Title from "./component/title/Title";
import Header from "./component/header/Header";
import BlockNumber from "./component/blockNumber/BlockNumber";
import BlockInfo from "./component/blockInfo/BlockInfo";
import reportWebVitals from './reportWebVitals';
import InfoMaps from "./component/infoMaps/InfoMaps";
import Slader from "./component/slader/Slader";
import KakaetoXrenVNizy from "./component/kakaetoXrenVNizy/KakaetoXrenVNizy";
import Fotter from "./footer/Fotter";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Header />
      <Title />
      <BlockNumber />
      <BlockInfo />
        <Slader />
      <InfoMaps />
      <KakaetoXrenVNizy />
      <Fotter />
  </React.StrictMode>
);
reportWebVitals();
