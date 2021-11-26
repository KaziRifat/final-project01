import React from "react";

const Contact = () => {
  return (
      <div classname="contact">
          <div class="contact-content">
              <div className="contact-text">
                  <h3>Get In Touch</h3>
                  <label>First Name</label>
                  <input type="text" placeholder="First Name"/>

                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name"/>
                  
                  <label>Email</label>
                  <input type="email" placeholder="Email"/>
                  
                  <label>Phone Number</label>
                  <input type="number" placeholder="Phone Number"/>
                  <label>Comments</label>
                  <input type="textarea" placeholder="Comments"/>
                
                  <div className="contact_btn">
                    <a href="" className="btn btn-smart">COMMENT</a>
                 </div>
              </div>
          </div>
      </div>
  );
};

export default Contact;
