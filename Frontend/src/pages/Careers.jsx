import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import CareerCSS from "../assets/styles/Careers.module.css"

function Careers() {
  return (
    <>
    <Navbar />
    <div className={CareerCSS.background }>
    <div className={BrandCSS.text}>
        <h1 className={BrandCSS.h1}>Join the<br/> Conversation </h1>
       <p className={BrandCSS.belowheading}>At Reddit, you’ll help build something that<br/> 
       encourages millions around the world to think more,
       <br/> do more, learn more, feel more– and maybe even <br/>
       laugh more.
       
</p>
</div>
    </div>
     <Footer /> 
    
    </>
  );
}

export default Careers
