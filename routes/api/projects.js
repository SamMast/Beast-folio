const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

const api_key = "key-5c1bdfc81e9df854f469efb1edea6ce7" //process.env.api_key;
const domain = 'sandboxbf6265c3f8f643859c89ec1532ab6d75.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


// Matches with "/api/projects"
router.route("/")
  .get((req, res, next) => {
  	next();
   },projectsController.findAll)
  .post(projectsController.create);

// Matches with "/api/projects/:id"
router
  .route("/:id")
  .get(projectsController.findById)
  .put(projectsController.update)
  .delete(projectsController.remove);

// // Matches with "/api/projects/submitmail"
// router.route("/submitmail")
//   .post();

module.exports = router;
