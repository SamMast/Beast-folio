import React from "react";
// import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const Resume = () => (
  <div style={{clear:"both"}} id="resume">
  	<hr />
  	<h2 className="text-center">About Me</h2>
  	<hr />
  	<br />
  	<br />
  	<br />
  	<img src="https://sammast.github.io/Responsive-Portfolio/assets/images/IMG_3302.jpg" alt="sam" style={{display:"block",margin:"auto",borderRadius:"50%",height:"25vh",width:"25vh"}} />
  	<br />
  	<p className="text-center col-md-6" style={{margin:"auto"}}>I am a graduate of The University of Colorado at Boulder and University of Denver, currently working in the Web Development field. While attending CU Boulder, I studied and received my degree in Integrative Physiology. I previously worked for a tech company in the Health and Life insurance field, and after graduating from the University of Denver I am now pursuing Full Stack Web Development.</p>
  	<br />
	<ul className="timeline">
  	<h4 className="text-center" style={{textDecoration:"underline"}}>Resume:</h4>
  	<br />
  	<br />
	  <li className="timeline-event">
	    <label className="timeline-event-icon"></label>
	    <div className="timeline-event-copy">
	      <p className="timeline-event-thumbnail">2018</p>
	      <h3>University of Denver Coding Bootcamp</h3>
	      <h4>Student</h4>
	      <p><strong>Info</strong><br/>Intensive Full Stack Web Development bootcamp where we covered HTML5, CSS3, JavaScript/jQuery, AJAX, JSON, Node.js, MongoDB, MySQL, Express.js, React.js, and PHP.</p>
	      <p>This is where I honed my Web Development craft</p>
	    </div>
	  </li>
	  <li className="timeline-event">
	    <label className="timeline-event-icon"></label>
	    <div className="timeline-event-copy">
	      <p className="timeline-event-thumbnail">2014 - 2017</p>
	      <h3>Businessolver</h3>
	      <h4>System Relationship Manager</h4>
	      <p><strong>Info</strong><br/>A tech company in the Insurance Field which provides system-as-as-service platform to manage human resources.</p>
	      <div><strong>Accomplishments</strong><br/>
	      	<ul>
	      		<li>Responsible for systems management to meet business objectives and track progress to ensure timely and accurate completion of key milestones for daily and long term client tasks</li>
	      		<li>Mitigated risk by attention to detail in creating process documentation for High profile clients</li>
	      		<li>Used data analysis to accurately identify trends to problem solve daily tasks, increasing efficiency </li>
	      		<li>Proficient in analyzing client programming in order to articulate to systems analyst projects goals and needs </li>
	      	</ul>
	      </div>
	    </div>
	  </li>
	  <li className="timeline-event">
	    <label className="timeline-event-icon"></label>
	    <div className="timeline-event-copy">
	      <p className="timeline-event-thumbnail">2013 - 2014</p>
	      <h3>StudySync</h3>
	      <h4>Marketing Research Intern</h4>
	      <div><strong>Accomplishments</strong><br/>
	      	<ul>
	      		<li>Supported Director of Educational Partnership through data collection to advance educational data technology in schools</li>	      
	      		<li>Conducted research and successfully gathered leads on potential partnerships for implementation in domestic and international school districts</li>
	      	</ul>
	      </div>
	    </div>
	  </li>
	  <li className="timeline-event">
	    <label className="timeline-event-icon"></label>
	    <div className="timeline-event-copy">
	      <p className="timeline-event-thumbnail">2007 - 2012</p>
	      <h3>University of Colorado at Boulder</h3>
	      <h4>Student</h4>
	      <div><strong>Accomplishments</strong></div>
	      	<ul>
		      	<li>B.A. Integrative Physiology</li> 
		      	<li>National Society of Leaderhsip and Success</li> 
		      	<li>4-year Golden Buffalo Marching Band member (drumline)</li>
	      	</ul>
	    </div>
	  </li>
	  <li className="timeline-event">
	    <label className="timeline-event-icon"></label>
	    <div className="timeline-event-copy">
	      <p className="timeline-event-thumbnail">2007 - 2013</p>
	      <h3>Air Academy High School Bands</h3>
	      <h4>Lead Percussion Instructor</h4>
	      <div><strong>Accomplishments</strong><br/>
	      	<ul>
	      		<li>Facilitated the achievement of 1st place trophies in the CBA State Marching Band Competition for 6 straight years</li>
	      		<li>Developed and directed weekly practices for high school music students</li>	      
	      		<li>Managed and mentored a team of percussion instructors</li>
	      		<li>Implemented and taught private lessons for further student development</li>
	      	</ul>
	      </div>
	    </div>
	  </li>
	</ul>  
    <Footer />
  </div>
);

export default Resume;
