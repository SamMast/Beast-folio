import React, { Component } from "react";
// import { Link } from "react-router-dom";


class Home extends Component {
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
		<div className="homepage">
			<div className="menu" onClick ={this.menuToggle}>
				<div className="hamburger"></div>
				<div className="hamburger"></div>
				<div className="hamburger"></div>
			</div>

			{this.state.menuOpen ? (
	          	<div className="nav">
	          		<ul>
	          			<li><a href="/">Home</a></li>
	          			<li><a href="/portfolio">Portfolio</a></li>
	          			<li><a href="/resume">Resume</a></li>
	          			<li><a href="/contact">Contact</a></li>
	          		</ul>
	          	</div>
	          	) : (<div className="nav" />)
        	}



			<div className="intro">
				<h1 className="header">
					Samuel Mast
				</h1>
				<div className="underscore">
					<h4>Web Developer </h4>
					<h4>Denver, Colorado</h4>
				</div>
			</div>



		</div>
    );
  }
}



export default Home;
