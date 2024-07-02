import React from 'react'
import BrandCSS from "../assets/styles/Brand.module.css"
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx"
function Brand() {
  return (
    <div>
    <Navbar />
    <div className={BrandCSS.background}>
    <div className={BrandCSS.text}>
        <h1 className={BrandCSS.h1}>The Reddit<br/> Brand</h1>
       <p className={BrandCSS.belowheading}>Reddit aspires to be the heart of the internet. It gives <br/>people tools to build community, creating space for<br/> genuine discussion. Our brand positioning amplifies<br/> what makes Reddit utterly unique: people,<br/> conversations, and interests.
       
</p>
</div>
<img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVcaul15jXxC8vX2v-WMq4ShKQSHa8U7XAA&s" className={BrandCSS.img} />
       
      </div>
<div className={BrandCSS.background2}>
<img src="https://www.redditinc.com/assets/images/site/Reddit_Icon_FullColor-1_2023-11-29-161416_munx.jpg" className={BrandCSS.img2} />

<div className={BrandCSS.text}>
      <h1 className={BrandCSS.h2}> The Reddit Logo</h1>
      <p className={BrandCSS.belowheading2}>Designed to convey the conversational,
        <br /> community aspects of Reddit, our logo consists of 
        <br/> a stylized Snoo head contained within an <br/> 
        OrangeRed (#FF4500) conversation bubble,
        <br /> typically paired with the Reddit wordmark.
      </p>
      <p className={BrandCSS.belowheading3}>It showcases Snoo, our lovable, genderless mascot
         <br/>and community ambassador, who looks out with a 
         <br />friendly, engaged expression. Shorthand for
         <br/> Reddit itself, the Reddit icon should appear on all
         <br/> marketing and communications about Reddit.</p>
         </div>

      </div>
      <div className={BrandCSS.background3}>
        <div className={BrandCSS.text}>
      <h1 className={BrandCSS.h3}>Snoo</h1>
      <p className={BrandCSS.belowheading4}>Discovery and exploration are integral to Reddit,<br/>
       so appropriately our mascot is exceptionally<br/>
        curious about our world and the people in it.</p>  
        <p className={BrandCSS.belowheading5}> Why Snoo? Because everyone has needed to see a <br/>
        friendly face at some point in their life. Everyone<br/>
         has felt like an outsider. And everyone has needed <br/>
         to talk with someone or ask a question. Snoo is a <br/>
         visitor to our world whose curiosity is a common<br/>
          thread across the broad community of people who<br/>
           use Reddit.</p>
           </div>
<img src="https://www.redditinc.com/assets/images/site/Rectangle-2776-1.png" className={BrandCSS.img3} />
      </div>
    <Footer />
    </div>
  );
}

export default Brand;
