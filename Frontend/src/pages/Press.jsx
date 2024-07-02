import React from 'react'
import PressCSS from '../assets/styles/Press.module.css';
import Navbar from "../components/Navbar.jsx"
function Press() {
  return (
    <div>
      <Navbar />
      <div className={PressCSS.background}>
        <h1 className={PressCSS.h1}>Where Stories<br/> Are Born</h1>
       <p className={PressCSS.belowheading}> Reddit creates and catalyzes culture — a single<br/> comment can spark a global movement.</p>

      </div>
<h1 className={PressCSS.h2}> Media Resources</h1>
<div className={PressCSS.boxes}>  
  <div className={PressCSS.box1}> 
    <h4 className={PressCSS.h3}>Media assets</h4>
    <p className={PressCSS.p}> Photos and videography of our <br/>
    leadership,product,brand and offices</p>
  </div>
  <div className={PressCSS.box2}> 
    <h4 className={PressCSS.h3}>Press and broadcast guidelines</h4>
    <p className={PressCSS.p}> Embeds ,linking content,and presenting <br/>
    Reddit in media</p>
  </div>
  <div className={PressCSS.box3}> 
    <h4 className={PressCSS.h3}>Contact</h4>
    <p className={PressCSS.p}> Connect with Reddit's Communictaions <br/>
    team </p>
  </div>
</div>




    </div>
  );
}

export default Press
