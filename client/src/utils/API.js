import axios from "axios";

export default {
  // Gets all item
  getAll: function() {
    return axios.get("http://localhost:3001/api/projects");
  },
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("http://localhost:3001/api/projects/" + id);
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("http://localhost:3001/api/projects/" + id);
  },
  // Saves a item to the database
  saveItem: function(projectData) {
    return axios.post("http://localhost:3001/api/projects", projectData);
  }
};


  // Update a item to the database
  // updateItem: function(id, projectData) {
  //   return axios.post("http://localhost:3001/api/projects" + id, projectData);
  // }

  
