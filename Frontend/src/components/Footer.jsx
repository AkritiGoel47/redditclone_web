
import React from "react";
import FooterCSS from'../assets/styles/Navbar.module.css';

function Footer(){
return(


<div className={FooterCSS.container}>

    <div className={FooterCSS.content}>
    <div className={FooterCSS.header} >    <h3>Company<br/></h3></div>
    <div className={FooterCSS.footerparagh}>    Reddit,Inc.<br/>
        
        Careers<br/>
        Investors<br/>
        Press Contact <br/>
        Blog <br/>
        r/RDDT<br/>
        </div>
        


    </div>
    <div className={FooterCSS.content}>
    <div className={FooterCSS.header} > <h3>Community<br/></h3> </div>
    <div className={FooterCSS.footerparagh}>    Reddit.com<br/>
        Reddit for Community<br/>
        Content Policy<br/>
        Help Center<br/>
        </div>
        
       


    </div>
    <div className={FooterCSS.content}>
      <div className={FooterCSS.header} > <h3>Privacy & Safety<br/></h3></div>
      <div className={FooterCSS.footerparagh}>  Privacy Policy<br/>
        User Agreement<br/>
        Transparency Report<br/>
        r/redditsecurity<br/>
        Other Terms and Policies <br/>
        </div>
        


    </div>
</div>
);

}



export default Footer;