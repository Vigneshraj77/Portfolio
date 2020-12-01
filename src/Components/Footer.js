import React, { Component } from 'react';

class Footer extends Component {
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
    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
           <li key={network.lname}><a href={network.lurl}><i className={network.lclassName}></i></a></li>
            <li key={network.gname}><a href={network.gurl}><i className={network.gclassName}></i></a></li>
            <li key={network.fname}><a href={network.furl}><i className={network.fclassName}></i></a></li>
            <li key={network.iname}><a href={network.iurl}><i className={network.iclassName}></i></a></li>
           
           </ul>
        </div>
        <li>&copy; All credit goes to Tim Baker - Copyright 2017 Tim Baker</li>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
