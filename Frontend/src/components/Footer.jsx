
import React from "react";
import styles from'../assets/styles/Navbar.module.css';

function Footer(){
return(

<div className={styles.container}>
<div className={styles.header1} ><h2>
        reddit
    </h2></div>
    <div className={styles.content}>
    <div className={styles.header} >    <h3>Company<br/></h3></div>
        Reddit,Inc.<br/>
        
        Careers<br/>
        Investors<br/>
        Press Contact <br/>
        Blog <br/>
        r/RDDT<br/>


    </div>
    <div className={styles.content}>
    <div className={styles.header} > <h3>Community<br/></h3> </div>
        Reddit.com<br/>
        Reddit for Community<br/>
        Content Policy<br/>
        Help Center<br/>
        
       


    </div>
    <div className={styles.content}>
      <div className={styles.header} > <h3>Privacy & Safety<br/></h3></div>
        Privacy Policy<br/>
        User Agreement<br/>
        Transparency Report<br/>
        r/redditsecurity<br/>
        Other Terms and Policies <br/>
        


    </div>
</div>
);

}



export default Footer;