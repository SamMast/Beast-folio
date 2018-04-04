import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Technologies from "./pages/Technologies";


//version with 1 footer
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={Resume} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="/technology" component={Technologies} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);



export default App;
