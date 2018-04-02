import React from "react";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact"

//version with 1 footer
const App = () => (
  <div>
  	<Home />
    <hr />
    <Resume />
    <br />
    <hr />
    <Portfolio />
    <br />
    <br />
    <br />
    <br />
    <Contact />

  </div>
);

//version with multiple footers
// const App = () => (
//   <div>
//     <Home />
//     <hr />
//     <Resume />
//     <br />
//     <div className="footer text-center">
//         <hr />
//          <h6 style={{paddingTop:"5px"}}>© Samuel Mast 2018</h6>
//          <div className="decoration"><br/></div>
//     </div>
//     <br />
//     <br />
//     <br />
//     <br />
//     <hr />
//     <Portfolio />
//     <br />
//     <div className="footer text-center">
//         <hr />
//          <h6 style={{paddingTop:"5px"}}>© Samuel Mast 2018</h6>
//          <div className="decoration"><br/></div>
//     </div>
//     <br />
//     <br />
//     <br />
//     <Contact />
//     <br />
//     <br />
//     <br />
//     <div className="footer text-center">
//         <hr />
//          <h6 style={{paddingTop:"5px"}}>© Samuel Mast 2018</h6>
//          <div className="decoration"><br/></div>
//     </div>

//   </div>
// );

export default App;
