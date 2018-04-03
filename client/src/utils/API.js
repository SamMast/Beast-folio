import axios from "axios";

export default {
  // Gets all item
  getAll: function() {
    return axios.get("/api/projects");
  },
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a item to the database
  saveItem: function(projectData) {
    return axios.post("/api/projects", projectData);
  },
  // Update a item to the database
  updateItem: function(id, projectData) {
    return axios.put("/api/projects/" + id, projectData);
  },
  // send mail
  sendMail: function(mailData) {
    return axios.post("/api/projects/sumbitmail", mailData);
  }

};




  
