import React, { Component } from "react";
import "./Optin.css";

class Optin extends Component {
  openWhatsApp() {
    const phone = "9703228853"; // Replace with your phone number
    const message = "Hello, I’m interested!"; // Customize the message
    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  }

  render() {
    return (
      <div className="optin">
        <p>Want to be the first to know when we launch?</p>
        <button onClick={() => this.openWhatsApp()}>Click Me</button>
        <div id="modal">
          <div className="wrapper">
            <h3>Enter Your Email</h3>
            <div className="clearfix">
              <div className="col-8" />
              <div className="col-3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Optin;
