
import React from "react";
import FooterCSS from'../assets/styles/Navbar.module.css';

function Footer(){
return(


<div className={FooterCSS.container}>

    <div className={FooterCSS.content}>
    <div className={FooterCSS.header} >    <h3>Company<br/></h3></div>
    <div className={FooterCSS.lineSpacing}>  Reddit,Inc.<br/> </div>
        
    <div className={FooterCSS.lineSpacing}>   Careers<br/></div>
    <div className={FooterCSS.lineSpacing}>   Investors<br/></div>
    <div className={FooterCSS.lineSpacing}>   Press Contact <br/></div>
    <div className={FooterCSS.lineSpacing}>   Blog <br/></div>
    <div className={FooterCSS.lineSpacing}>   r/RDDT<br/></div>
       
        


    </div>
    <div className={FooterCSS.content}>
    <div className={FooterCSS.header} > <h3>Community<br/></h3> </div>
    <div className={FooterCSS.lineSpacing}>    Reddit.com<br/></div>
    <div className={FooterCSS.lineSpacing}> Reddit for Community<br/></div>
    <div className={FooterCSS.lineSpacing}>  Content Policy<br/></div>
    <div className={FooterCSS.lineSpacing}>Help Center<br/></div>
       
        
       


    </div>
    <div className={FooterCSS.content}>
      <div className={FooterCSS.header} > <h3>Privacy & Safety<br/></h3></div>
      <div className={FooterCSS.lineSpacing}>  Privacy Policy<br/></div>
      <div className={FooterCSS.lineSpacing}>  User Agreement<br/></div>
      <div className={FooterCSS.lineSpacing}> Transparency Report<br/></div>
      <div className={FooterCSS.lineSpacing}>  r/redditsecurity<br/></div>
      <div className={FooterCSS.lineSpacing}> Other Terms and Policies <br/></div>
     
        


    </div>
</div>
);

}



export default Footer;