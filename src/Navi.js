import React from 'react';
import writeIcon from './images/write.png'; 


export default function Navi() {
  return (
    <div className="navi">
      <h1><img src={writeIcon} alt="home" className="write"/></h1>
    </div>
  );
}
