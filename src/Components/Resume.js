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
    years: "April 2020 - July 2020",
    description: "worked to develop a E-Commerce website for Fashion products."
  
}
const skills={
      pname: "Python",
      plevel: "85%",
      pclassName:"bar-expand python",
  
      cname: "C",
      clevel: "85%",
      cclassName:"bar-expand c",
  
       hname: "HTML",
       hlevel: "80%",
       hclassName:"bar-expand html",
  
       rname: "React JS",
       rlevel: "75%",
       rclassName:"bar-expand reactjs",

       aname: "Android Studios",
       alevel: "65%",
       aclassName:"bar-expand androidstudios",
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
            <h1><span>Intership</span></h1>
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
                  
                <li key={skills.cname}><span style={{width:skills.clevel}}className={skills.cclassName}></span><em>{skills.cname}</em></li>    
                <li key={skills.pname}><span style={{width:skills.plevel}}className={skills.pclassName}></span><em>{skills.pname}</em></li>
                <li key={skills.rname}><span style={{width:skills.rlevel}}className={skills.rclassName}></span><em>{skills.rname}</em></li>
                <li key={skills.aname}><span style={{width:skills.alevel}}className={skills.aclassName}></span><em>{skills.aname}</em></li>            
                <li key={skills.hname}><span style={{width:skills.hlevel}}className={skills.hclassName}></span><em>{skills.hname}</em></li>		
                     </ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
