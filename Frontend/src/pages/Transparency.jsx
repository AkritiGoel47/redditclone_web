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
      <Footer />
    </div>
  );
}

export default Transparency
