import React, { useState } from 'react'
import './Form.css'
import Zoom from 'react-reveal/Zoom';
import emailjs from 'emailjs-com';


function Form() {

    const Result = () => {
      return (
        <p>Your message has been successfully sent. We will contact you soon!</p>
      )
    }

    const [result, showResult] = useState(false);

    setTimeout(() => {
      showResult(false);
    }, 5000)

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7ofpfdr', 'template_7xe3m8f', e.target, 'user_VNEhQG2m7nXkEhXX37C0V')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);

     }


    const src = require('../../images/bg2.jpg').default

    return (
        <div className="body-form" id="contact" style={{
            backgroundSize: "cover",
            backgroundImage: `url(${src}
            )`,
            backgroundPosition: 'center',
        }}>
            <div className="background" >
            <Zoom>
  <div className="containerZx">
  
    <div className="screen">
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">
            <p>CONTACT INFO : +91 8800402430, +91 8527521550</p>
            <p>LOCATION : Noida</p>
            <p>MAIL : <a href="www.mail.com">info@pixhexstudio.com</a></p>
            </div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
          <form onSubmit={sendEmail}>
            <div className="app-form-group">
              <input className="app-form-control" required="required" name="fullName" placeholder="NAME" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" required="required" name="email" placeholder="EMAIL" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" required="required" name="phone" placeholder="CONTACT NO" />
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" required="required" name="message" placeholder="MESSAGE" />
            </div>
            <div className="app-form-group buttons">
              <button type="submit" value="sendMessage" className="app-form-button">SEND</button>
            </div>
            <div>
              { result ? <Result /> : null };
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Zoom>
</div>


        </div>
    )
}

export default Form
