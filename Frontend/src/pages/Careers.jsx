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
   
   
   
<div className={CareerCSS.container}>
  <div className={CareerCSS.text_block}>
    <h2>What Would Snoo Do?</h2>
    <div className={CareerCSS.large_text}>
      Values describe who we are and who we want to be.
    </div>
  </div>
  <div className={CareerCSS.info_wrapper}>
    <div className={CareerCSS.info_content}>
      <div className={CareerCSS.img_block}>
        <img src="https://www.redditinc.com/assets/images/site/careers/Redditinc_Careers-Page_Tongue@2x.png" width='42' height='41'/>
      
      </div>
      <div className={CareerCSS.content_block}>
        <h3>Reddit's Mission First</h3>
        <div className={CareerCSS.text}>
          <p>
           It bears repeating: Our mission is to bring <br/>
           community,belonging,and empowerment to <br/>
           everyone in the world.As we move towards this <br/>
           goal with different initiatives from different<br/>
            parts of the org, it's important to remember <br/>
            that we're in this together with one shared goal<br/>
            above all others.

          </p>
        </div>
      </div>
    </div>
    <div className={CareerCSS.info_content}>
      <div className={CareerCSS.img_block}>
        <img src="https://www.redditinc.com/assets/images/site/careers/Redditinc_Careers-Page_HeartEyes@2x.png" width='42' height='41'/>
      
      </div>
      <div className={CareerCSS.content_block}>
        <h3>Make Something People Love</h3>
        <div className={CareerCSS.text}>
          <p>
           Our surest path to success is to make something<br/>
           people love.

          </p>
        </div>
      </div>
    </div>
    <div className={CareerCSS.info_content}>
      <div className={CareerCSS.img_block}>
        <img src="https://www.redditinc.com/assets/images/site/careers/Redditinc_Careers-Page_IconPose@2x.png" width='42' height='41'/>
      
      </div>
      <div className={CareerCSS.content_block}>
        <h3>Evolve</h3>
        <div className={CareerCSS.text}>
          <p>
           Only by continually inproving and learning will<br/>
           we succeed.

          </p>
        </div>
      </div>
    </div>
    <div className={CareerCSS.info_content}>
      <div className={CareerCSS.img_block}>
        <img src="https://www.redditinc.com/assets/images/site/careers/Redditinc_Careers-Page_Wink@2x.png" width='42' height='41'/>
      
      </div>
      <div className={CareerCSS.content_block}>
        <h3>Add Value</h3>
        <div className={CareerCSS.text}>
          <p>
          We constantly evaluate our work to ensure it's<br/>
          adding value and bringing us closer to achieving <br/>
          our mission.It's easy to fall into the trap of <br/>
          conflating activity with value.Adding value <br/>
          requires hard work,but not all hard work is <br/>
          valuable.
          </p>
        </div>
      </div>
    </div>
    <div className={CareerCSS.info_content}>
      <div className={CareerCSS.img_block}>
        <img src="https://www.redditinc.com/assets/images/site/careers/Redditinc_Careers-Page_Smile@2x.png" width='42' height='41'/>
      
      </div>
      <div className={CareerCSS.content_block}>
        <h3>Default Open</h3>
        <div className={CareerCSS.text}>
          <p>
           The free flow of ideas and feedback is the<br/>
            lifeblood of a healthy organization, and Reddit<br/>
            must embrace it if we are to thrive.

          </p>
        </div>
      </div>
    </div>

  </div>
</div>


    
    </>
  );
}

export default Careers
