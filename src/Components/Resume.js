import React, { Component } from 'react';

class Resume extends Component {
  render() {
const edu={school: "Saranathan College of Engineering",
degree: "Bachelors in Computer Science and Engineering",
graduated: "2021",
description: "With 7.83 CGPA"}
const intern={
    company: "SteerClear",
    title: "React JS Developer",
    years: "April 2020 - Present",
    description: "worked to develop a E-Commerce website for Fashion products."
  
}
      if(this.props.data){  
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
               <div key={edu.school}><h3>{edu.school}</h3>
        <p className="info">{edu.degree} <span>&bull;</span><em className="date">{edu.graduated}</em></p>
        <p>{edu.description}</p></div>
               </div>
            </div>
         </div>
      </div>
      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
         <div key={intern.company}><h3>{intern.company}</h3>
            <p className="info">{intern.title}<span>&bull;</span> <em className="date">{intern.years}</em></p>
            <p>{intern.description}</p>
        </div>
        </div>
    </div>



      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
