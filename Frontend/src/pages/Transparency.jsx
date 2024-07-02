import React from 'react'
import TransparencyCSS from '../assets/styles/Transparency.module.css'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx'

function Transparency() {
  return (
    <div>
      <Navbar />
      <div className={TransparencyCSS.background}>
        <div className={TransparencyCSS.text}>
        <h1 className={TransparencyCSS.h1}>Keeping Our<br/>
         Users Safe</h1>
         <p className={TransparencyCSS.belowheading}>We regularly assess our platform and share our <br/> 
         findings about the health of our communities, our <br/>
          ongoing efforts to foster safe interactions, and<br/>
          insights into how we enforce our policies.</p>
          </div>
          <img src="https://b.thumbs.redditmedia.com/AVd1b_0BwAhr71gBUI6lQbGpCiLBxgGTtQAI6L85-ns.jpg" className={TransparencyCSS.img}/>
      </div>
      <h1 className={TransparencyCSS.h2}> Policy and Safety Resources</h1>
      <div className={TransparencyCSS.boxes}>
      <div className={TransparencyCSS.box1}> 
    <h4 className={TransparencyCSS.h3}>Transparency reports</h4>
    <p className={TransparencyCSS.p}> Recurring insights about content <br/>
    moderation and global legal <br/>
    requests</p>
  </div>
  <div className={TransparencyCSS.box2}> 
    <h4 className={TransparencyCSS.h3}>Terms and policies</h4>
    <p className={TransparencyCSS.p}> Reddit's User Agreement, Privacy <br/>
   Policy,Content Policy,and other <br/>
    terms</p>
  </div>
  <div className={TransparencyCSS.box3}> 
    <h4 className={TransparencyCSS.h3}>Guidelines for law <br/>
    enforcement</h4>
    <p className={TransparencyCSS.p}>Procedures and information for  <br/>
    legal requests from law <br/>
    </p>
  </div>

      </div>
      <div className={TransparencyCSS.boxes2}>
      <div className={TransparencyCSS.box4}> 
    <h4 className={TransparencyCSS.h3}>r/redditsecurity</h4>
    <p className={TransparencyCSS.p}> News from Reddit about platform<br/>
    security and safety
    </p>
  </div>
  <div className={TransparencyCSS.box5}> 
    <h4 className={TransparencyCSS.h3}>Reddit Help Center</h4>
    <p className={TransparencyCSS.p}> More information about Reddit, <br/>
   including answers to frequently <br/>
    asked questions</p>
  </div>
  <div className={TransparencyCSS.box6}> 
    <h4 className={TransparencyCSS.h3}> Bug bounty program
    </h4>
    <p className={TransparencyCSS.p}>How to report bugs and security <br/>
    vulnerabilities <br/>
    </p>
  </div>

      </div>
      <Footer />
    </div>
  );
}

export default Transparency
