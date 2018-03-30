import React, { Component } from "react";
// import { Link } from "react-router-dom";
// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'samuel.a.mast@gmail.com',
//     pass: 'hackysackr19'
//   }
// });


class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert("Thank you for contacting Sam.\nHe will be in touch with you shortly.")

    // var mailOptions = {
    //   from: this.state.email,
    //   to: 'samuel.a.mast@gmail.com',
    //   subject: `${this.state.name}'s message from Portfolio`,
    //   text: this.state.message
    // };

    // transporter.sendMail(mailOptions, function(error, info){
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //   }
    // });

  };


  render() {
    return (
      <div>
        <h2 className="text-center">Contact Form</h2>
        <form className="col-md-6" style={{display:"block", margin:"auto"}}>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aspernatur deleniti ratione voluptatibus maiores, incidunt ad corporis id dolore est, vero ducimus animi nemo obcaecati nam sint dolores dignissimos doloremque.</p>
          <div className="form-row">
            <div className="col-md-6">

                <div className="md-form form-group">
                  <i className="fa fa-user prefix"></i>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-control"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleInputChange}
                    />
                  <label htmlFor="name">Name</label>
                </div>
            </div>
            <div className="col-md-6">
                <div className="md-form form-group">   
                  <i className="fa fa-envelope prefix"></i>
                  <input 
                    type="email"
                    id="email" 
                    className="form-control"
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="email">E-mail address</label>
                </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12">
                <div className="md-form form-group">
                    <i className="fa fa-pencil prefix"></i>
                    <textarea 
                      type="text" 
                      id="message" 
                      className="form-control md-textarea" 
                      rows="3"
                      value={this.state.message}
                      name="message"
                      onChange={this.handleInputChange}

                      ></textarea>
                    <label htmlFor="message">Message</label>
                </div>
            </div>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary btn-lg" 
            style={{display:"block", margin:"auto"}}
            onClick={this.handleFormSubmit}
            >Submit Form</button>
        </form>
      </div>
    );
  }
}

export default Contact;
