import React, { Component } from 'react';
import fall from "../images/fall1.jpeg";
import voice from "../images/voice1.png";
import calculator from "../images/calculator.jpg"
const project= [{
  title: "Voice Typing and Dictate",
  category: "Voice typing and dictate of word document by using Python",
  image: voice,
  url: "https://github.com/Vigneshraj77/Voice-Typing-for-word-document"
},
{
  title: "Fall Detection and Alert",
  category: "Fall detection and alert of mobile using Android Studios and FireBase",
  image: fall,
  url: "https://github.com/Vigneshraj77/fall-detection-and-alert-of-a-mobile-person-by-Android-studios"
},
{
  title: "Calculator App using React Native",
  category: "Calculator App using React Native",
  image: calculator,
  url: "https://github.com/Vigneshraj77/calculator-app"
}];
class Portfolio extends Component {
  render() {
      var projects = project.map(function(projects){
        var projectImage = projects.image;
        return (<div key={projects.title} className="columns portfolio-item" style={{color:"black"}}>
        <div className="item-wrap">
            <a href={projects.url} title={projects.title} >
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>)
    
      });  

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
  }

export default Portfolio;
