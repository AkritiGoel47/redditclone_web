import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import CareerCSS from "../assets/styles/Careers.module.css"

function Careers() {
  return (
    <>
    <Navbar />
    <div className={CareerCSS.background }>
    <div className={CareerCSS.text}>
        <h1 className={CareerCSS.h1}>Join the<br/> Conversation </h1>
       <p className={CareerCSS.belowheading}>At Reddit, you’ll help build something that<br/> 
       encourages millions around the world to think more,
       <br/> do more, learn more, feel more– and maybe even <br/>
       laugh more.
       
</p>
</div>
<img src="https://www.redditinc.com/assets/images/site/value_default-open.png"  className={CareerCSS.img} />
    </div>
    <h1 className={CareerCSS.h2}> What Would Snoo Do?</h1>
    <p className={CareerCSS.belowheading2}>Values describe who we are and who we want to be.</p>
    <div className={CareerCSS.background2}>
      <img src="https://www.redditinc.com/assets/images/site/careers/Redditinc_Careers-Page_Tongue@2x.png" className={CareerCSS.img2} />
      <div className={CareerCSS.text}>
      <h1 className={CareerCSS.h3}>Reddit's Mission First </h1>
      <p className={CareerCSS.belowheading3}>It bears repeating:Our mission is to bring community,<br/>
      belonging,and empowerment to everyone in the world.<br/>
      As we move towards this goal with different initiatives<br/>
      from different parts of the org,it's important to<br/>
      remember that we're in this together with one shared <br/>
      goal above all others.

      </p>
      </div>
    </div>
    <div className={CareerCSS.background3}>
      <div className={CareerCSS.text}>
      <h1 className={CareerCSS.h4}>Make Something People <br/>
      Love </h1>
      <p className={CareerCSS.belowheading4}>Our surest path to success is to make something people <br/>
      love.

      </p>
      </div>
      <img src="https://www.redditinc.com/assets/images/site/careers/Redditinc_Careers-Page_HeartEyes@2x.png" className={CareerCSS.img3} />
    </div>
     <Footer /> 
    
    </>
  );
}

export default Careers
