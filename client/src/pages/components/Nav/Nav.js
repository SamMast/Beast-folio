import React, { Component } from "react";


class Nav extends Component {
  state = {
    menuOpen: false
  };

  menuToggle = () => {

    console.log("running");
    if (!this.state.menuOpen) {
      this.setState({ menuOpen: true })
    } else {
      this.setState({ menuOpen: false })
    }
  };

  render() {
    return (
      <div>
        <div className="menu" onClick ={this.menuToggle}>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>

        {this.state.menuOpen ? (
          <div className="nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/technology">Technologies</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          ) : (<div className="nav" />)
        }


        <div className="contact-links">
          <a href="https://www.linkedin.com/in/sammast/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
          <br/>
          <a href="https://github.com/SamMast/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
          <br/>
          <a href="mailto:samuel.a.mast@gmail.com"><i className="fa fa-envelope"></i></a>
        </div>

      </div>
    );
  }
}



export default Nav;
