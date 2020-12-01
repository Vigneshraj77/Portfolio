import React, { Component } from 'react';

class Header extends Component {
  render() {

    const network={
   
        fname: "facebook",
        furl: "https://www.facebook.com/vikie.rj7",
        fclassName: "fa fa-facebook",
     
        lname: "linkedin",
        lurl: "https://www.linkedin.com/in/vignesh-raj-777s/",
        lclassName: "fa fa-linkedin",
      
        iname: "instagram",
        iurl: "https://www.instagram.com/vignesh._.raj/",
        iclassName: "fa fa-instagram",
   
        gname: "github",
        gurl: "https://github.com/Vigneshraj77",
        gclassName: "fa fa-github",
   }
      const name = "Vigneshraj S";
      const occupation=" Final Year CSE Student at Saranathan College of Engineering";
      const city= "Trichy";
      
    

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>I'm a {city} based <span>{occupation}</span>..</h3>
            <hr />
            <ul className="social">
            <li key={network.lname}><a href={network.lurl}><i className={network.lclassName}></i></a></li>
            <li key={network.gname}><a href={network.gurl}><i className={network.gclassName}></i></a></li>
            <li key={network.fname}><a href={network.furl}><i className={network.fclassName}></i></a></li>
            <li key={network.iname}><a href={network.iurl}><i className={network.iclassName}></i></a></li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
