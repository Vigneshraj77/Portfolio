import React, { Component } from 'react';
import propic from "../images/propic.jpg";
class About extends Component {
  render() {
   var now = new Date();
   var hrs = now.getHours();
   var msg = "";
   if (hrs <  12) msg = "Good Morning!!";      
   if (hrs < 15) msg = "Good Afternoon!!";    
   if (hrs < 17) msg = "Good Evening!!";      
   if (hrs < 24) msg = "Good Night!!";  
      const profilepic= propic;
      const bio = ". I'm Vigneshraj S Final year CSE student from Sarnathan College of Engineering.";
      const street = "77A Thangaiya Nagar, K K Nagar";
      const city = 'Trichy';
      const state = 'Tamil Nadu';
      const zip = "620021";
      const phone= "+918248752201";
      const email = "vigneshrajs71@gmail.com";
      const resumeDownload = "https://drive.google.com/uc?export=download&id=1nQz0ikf30OBIvgxIJ5juGzAenjnQcogM";
      const name = "Vigneshraj S";
    return (
      
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Vigneshraj Pro Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            
    <p><strong>{msg}</strong>{ bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
