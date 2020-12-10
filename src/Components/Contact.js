import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = ({ data }) => {
//   const [url, setUrl] = useState('mailto:test@example.com?subject=subject&body=body');
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
 
   const street = "77A Thangaiya Nagar, K K Nagar";
   const city = 'Trichy';
   const state = 'Tamil Nadu';
   const zip = "620021";
   const phone= "+918248752201";
   const myname= "Vigneshraj S"
   const SERVICE_ID= "service_ns173qr";
   const TEMPLATE_ID= "template_fmlr67v";
   console.log(data)
   
    const handleClick = (e) => {
       e.preventDefault();
       
       let templateParams = {
         from_name: name,
         userEmail:email,
         to_name: "vigneshrajs71@gmail.com",
         subject_msg: subject,
         msg: message,
        }
       emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams,"user_uFk507aNexZvonnDdKMBk")
       .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
         alert("Mail has been successfully delivered!");
       }, (err) => {
         console.log('FAILED...', err);
         alert("Mail has not been delivered!")
       });
    }
      

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{data?.message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form id="contactForm" name="contactForm" onSubmit={handleClick}> 
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input value={name} type="text" pattern="[A-Za-z]{2-30}" size="35" id="contactName" name="contactName" onChange={e => setName(e.target.value)} required/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input value={email}  type="email"  size="35" id="contactEmail" name="contactEmail" onChange={e=> setEmail(e.target.value)} required/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input value={subject} type="text"  size="35" id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)}  />
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required" >*</span></label>
                     <textarea value={message} onChange={e => setMessage(e.target.value)} cols="50" rows="15" id="contactMessage" name="contactMessage" required></textarea>
                  </div>

                  <div>
                     <button type='submit'  className="submit" value="Submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {myname}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">

		         </div>
            </aside>
      </div>
   </section>
    );
}

export default Contact;
