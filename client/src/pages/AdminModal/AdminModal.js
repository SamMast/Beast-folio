import React, { Component } from "react";
import API from "../../utils/API";

class AdminModal extends Component {
  state = {
    projects: [],
    title: "",
    url: "",
    imageUrl: "",
    githubUrl: "",
    description: "",
    technologies: "",
    admin: false,
    username: "",
    password: "",
    new: true
  };

  componentDidMount() {
    this.loadPortfolio();
  }

  loadPortfolio = () => {
    API.getAll()
      .then(res => {
        this.setState({ projects: res.data})
      })
      .catch(err => console.log(err));
  };

  getDetails = id => {

    if (id === "new") {

      this.setState({ title: "Enter", url: "The", imageUrl: "New", githubUrl: "Project", description: "Here", technologies: "Info", new: true })

    } else {
      API.getItem(id)
        .then(res => {
          console.log(res.data);
          this.setState({ title: res.data.title, url: res.data.url, imageUrl: res.data.imageUrl, githubUrl: res.data.githubUrl, description: res.data.description, technologies: res.data.technologies, new:false })
        })
        .catch(err => console.log(err));
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

    if (this.state.username === "sam" && this.state.password ==="mast") {
       this.setState({
        admin: true
      });     
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.new) {
      //save new item
      API.saveItem({
        title: this.state.title,
        url: this.state.url,
        imageUrl: this.state.imageUrl,
        githubUrl: this.state.githubUrl,
        technologies: this.state.technologies,
        description: this.state.description
      })
        .then(res => this.loadPortfolio())
        .catch(err => console.log(err));
    } else {
      //write logic to update item here
      
    }
  };


  render() {
    return (
      <div className="modal"  data-status="true">
        <div className="modal-left" style={{padding:"3vh"}}>
          <h2 className="text-center">Admin Mode</h2>
          <br />
          <p><em>must enter admin Username and Password to submit changes</em></p>
          <hr />
          <form>
            <div className="row">
              <div className="col">
                <div className="md-form mt-0">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Username" 
                    value={this.state.username}
                    name="username"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="col">
                <div className="md-form mt-0">
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
          </form>
          <hr />
          <br/ >
          <div>
            <h4>Current Projects</h4>
            <p><em>scroll for more options</em></p>
            <ul className="modalProjects">
              <li
                className="modalProjectItems" 
                onClick={() => this.getDetails("new")}
                ><i className="fa fa-plus"></i>   Add New Project    <i className="fa fa-plus"></i></li>

              {this.state.projects.map(project => (
                <li 
                  className="modalProjectItems" 
                  key={project._id}
                  onClick={() => this.getDetails(project._id)}
                  >{project.title}</li>
              ))}

            </ul>
          </div>
        </div>
        <div className="modal-right">
          <form style={{minWidth:"200px"}}>
            <div className="row">
              <div className="md-form form-group">   
                <input 
                  type="text"
                  id="title" 
                  className="form-control"
                  value={this.state.title}
                  name="title"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="title" className="active">Title</label>
              </div>
            </div>
            <div className="row">
              <div className="md-form form-group">   
                <input 
                  type="text"
                  id="url" 
                  className="form-control"
                  value={this.state.url}
                  name="url"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="url" className="active">URL</label>
              </div>
            </div>
            <div className="row">
              <div className="md-form form-group">   
                <input 
                  type="text"
                  id="imageUrl" 
                  className="form-control"
                  value={this.state.imageUrl}
                  name="imageUrl"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="imageUrl" className="active">Image URL</label>
              </div>
            </div>
            <div className="row">
              <div className="md-form form-group">   
                <input 
                  type="text"
                  id="githubUrl" 
                  className="form-control"
                  value={this.state.githubUrl}
                  name="githubUrl"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="githubUrl" className="active">Github URL</label>
              </div>
            </div>
            <div className="row">
              <div className="md-form form-group">   
                <input 
                  type="text"
                  id="technologies" 
                  className="form-control"
                  value={this.state.technologies}
                  name="technologies"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="technologies" className="active">Technologies</label>
              </div>
            </div>
            <div className="row">
              <div className="md-form">
                  <textarea 
                    type="text" 
                    id="description" 
                    className="md-textarea md-textarea-auto form-control" 
                    rows="2"
                    value={this.state.description}
                    name="description"
                    onChange={this.handleInputChange}
                  ></textarea>
                  <label htmlFor="description" className="active">Description</label>
              </div>
            </div>
            <div className="row">
              <div className="col-auto">
                {this.state.admin ?
                (<button 
                  type="submit" 
                  className="btn btn-primary mb-0"
                  onClick={this.handleFormSubmit}                 
                  >Submit</button>)
                : (<button type="submit" className="btn btn-primary mb-0 disabled">Submit</button>)
                }

              </div>
            </div>
          </form>
          <br />

          <div className="close">
          <a onClick={this.close}>
            <span className="fa fa-close"></span>
          </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminModal;

