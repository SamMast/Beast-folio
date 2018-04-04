import React, { Component } from "react";


class Nav extends Component {
  state = {
    menuOpen: false
  };

  menuToggle = () => {
    console.log(this.props.background);

    console.log("running");
    if (!this.state.menuOpen) {
      this.setState({ menuOpen: true })
    } else {
      this.setState({ menuOpen: false })
    }
  };

  style = {
    width: "100%",
    backgroundColor: this.props.background,
    opacity: 1,
    zIndex:997
  }

  render() {
    return (
      <div>
        <div className="menu pulse" onClick ={this.menuToggle}>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>

        {this.state.menuOpen ? (
          <div className="nav" style={this.style}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/technology">Technologies</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          ) : (
          <div className="nav" style={this.style}>
            <ul>
              <li style={{opacity:0}}><a href="/">Home</a></li>
              <li style={{opacity:0}}><a href="/about">About</a></li>
              <li style={{opacity:0}}><a href="/technology">Technologies</a></li>
              <li style={{opacity:0}}><a href="/portfolio">Portfolio</a></li>
              <li style={{opacity:0}}><a href="/contact">Contact</a></li>
            </ul>
          </div>)
        }

        <div className="contact-links pulse">
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
