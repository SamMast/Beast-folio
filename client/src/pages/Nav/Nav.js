import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./DeleteBtn.css";


const Nav = () => (
  <div className="component">
    <h2>Samuel   Mast<br />Web Developer</h2>

    <button className="cn-button" id="cn-button">Menu</button>
    <div className="cn-wrapper" id="cn-wrapper">
      <ul>
        <li><a href="/"><span class="fa fa-home">Home</span></a></li>
        <li><a href="/contact"><span class="fa fa-envelope">Contact</span></a></li>
        <li><a href="/resume"><span class="fa fa-list">Resume</span></a></li>
        <li><a href="/projects"><span class="fa fa-folder">Projects</span></a></li>
       </ul>
    </div>
  </div>
);

export default Nav;
