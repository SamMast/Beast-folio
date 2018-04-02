import React from "react";



const Technologies = props => (
  <div id="techDiv">
    <hr />
    <h2 className="text-center" >Technologies</h2>
    <hr />
    <br />
    <br />
    <br />
    <div className="text-center tech container">
      <ul className="techList row">
        <li className="col-md-3">HTML5<br /><img src="http://www.unixstickers.com/image/cache/data/stickers/html5/html5_bumper.sh-600x600.png" alt="html" /></li>
        <li className="col-md-3">CSS3<br /><img src="http://www.unixstickers.com/image/cache/data/stickers/css3/css3-600x600.png" alt="css" /></li>
        <li className="col-md-3">JavaScript<br /><img src="http://www.unixstickers.com/image/data/stickers/js/js.sh.png" alt="js" /></li>
        <li className="col-md-3">jQuery<br /><img src="http://www.unixstickers.com/image/cache/data/stickers/jquery/jquery_bumper.sh-600x600.png" alt="jquery" /></li>
        <li className="col-md-3">JSON<br /><img src="http://www.unixstickers.com/image/cache/data/stickers/json/json_bumper.sh-600x600.png" alt="json" /></li>
        <li className="col-md-3">Ajax<br /><img src="http://www.codespud.com/wp-content/uploads/2016/08/AJAX_logo_by_gengns.svg_-750x400.png" alt="ajax" /></li>
        <li className="col-md-3">Firebase<br /><img src="https://firebase.google.com/_static/images/firebase/touchicon-180.png" alt="firebase" /></li>
        <li className="col-md-3">Node.js<br /><img src="http://pluspng.com/img-png/nodejs-logo-vector-png-1-49-2-98-375.png" alt="node" /></li>
        <li className="col-md-3">Handlebars.js<br /><img src="https://i0.wp.com/blog.fossasia.org/wp-content/uploads/2017/07/handlebars-js.png?fit=500%2C500&ssl=1" alt="handlebars" /></li>
        <li className="col-md-3">MySQL<br /><img src="https://www.seeklogo.net/wp-content/uploads/2017/05/mysql-logo.png" alt="mySQL" /></li>
        <li className="col-md-3">Sequelize<br /><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSItOZhJ8dgXp-gyQ5bZQ4cXDeJrGvZ1QNYNEx8wz0nPRApeE2k" alt="sequelize" /></li>
        <li className="col-md-3">MongoDBv<img src="https://i2.wp.com/www.damiencosset.com/wp-content/uploads/2017/07/mongodb.png?fit=413%2C484&ssl=1" alt="mongodb" /></li>
        <li className="col-md-3">Mongoose<br /><img src="data:image/png;base64,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" alt="mongoose" /></li>
        <li className="col-md-3">Express.js<br /><img src="https://camo.githubusercontent.com/647e291a5fd52d50e01deb82f9392c462df148a6/687474703a2f2f617070732e6f63746f636f6e73756c74696e672e636f6d2f696d616765732f6578707265737349636f6e2e706e67" alt="express" /></li>
        <li className="col-md-3">React.js<br /><img src="http://www.unixstickers.com/image/cache/data/stickers/react/badge/React-JS.sh-600x600.png" alt="react" /></li>
        <li className="col-md-3">PHP<br /><img src="http://www.unixstickers.com/image/cache/data/stickers/php/php_bumper.sh-600x600.png" alt="php" /></li>
      </ul>
    </div>
    <div style={{clear:"both"}}></div>
  </div>
);


export default Technologies;
