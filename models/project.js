const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  imageUrl: { type: String, required: true },
  githubUrl: { type: String, required: true },
  description: String
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
