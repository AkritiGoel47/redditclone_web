import React from 'react'
import Navbar from "../components/Navbar.jsx"
import CareerCSS from "../assets/styles/Careers.module.css"
function Careers() {
  return (
    <>
    <Navbar />
    <div className={CareerCSS .background}>
    <h1 className={CareerCSS.line}>Join the<br/> Conversation</h1>
    <p className={CareerCSS.paragh1}>
    At Reddit, you’ll help build something that<br/> encourages millions around the world to think more,<br/> do more, learn more, feel more– and maybe even<br/> laugh more.
    </p>
    </div>
   
   
    <h1 className={CareerCSS.line2}>What Would Snoo Do?</h1>
    <h3 className={CareerCSS.line3}>Values describe who we are and who we want to be.</h3>
       <div className={CareerCSS.paragraph}>
        <img className={CareerCSS.image} url='https://www.redditinc.com/assets/images/site/careers/Redditinc_Careers-Page_Tongue@2x.png' alt="Description of my image"  />
<h3 className={CareerCSS.line4}> Reddit's Mission First</h3>
<h4 className={CareerCSS.line5}>It bears repeating: Our mission is to bring community,<br/> belonging, and empowerment to everyone in the world.<br/> As we move towards this goal with different initiatives<br/> from different parts of the org, it's important to<br/> remember that we're in this together with one shared<br/>goal above all others.</h4>
</div>


    
    </>
  );
}

export default Careers
