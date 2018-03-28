import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    book: {}
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id

  render() {
    return (
      <div>
        <div className="text-center">Contact Form</div>
        <form>
          <div className="form-row">
            <div className="col-md-6">

                <div className="md-form form-group">
                  <i className="fa fa-user prefix"></i>
                  <input type="text" id="name" className="form-control"/>
                  <label htmlFor="name">Name</label>
                </div>
            </div>
            <div className="col-md-6">
                <div className="md-form form-group">   
                  <i className="fa fa-envelope prefix"></i>
                  <input type="email" id="email" className="form-control"/>
                  <label htmlFor="email">E-mail address</label>
                </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12">
                <div className="md-form form-group">
                    <i className="fa fa-pencil prefix"></i>
                    <textarea type="text" id="message" className="form-control md-textarea" rows="3"></textarea>
                    <label htmlFor="message">Message</label>
                </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-md">Sign in</button>
        </form>
      </div>
    );
  }
}

export default Contact;
