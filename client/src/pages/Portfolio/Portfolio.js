import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import Modal from "../Modal";

class PortfolioItems extends Component {
  state = {
    projects: [],
    title: "",
    url: "",
    imageUrl: "",
    githubUrl: "",
    description: "",
    technologies: "",
    modal: false
  };

  componentDidMount() {
    this.loadPortfolio();
  }

  loadPortfolio = () => {
    API.getAll()
      .then(res => {
        this.setState({ projects: res.data, title: "", url: "", imageUrl: "", githubUrl: "", description: "" })
      })
      .catch(err => console.log(err));
  };

  deleteItem = id => {
    // prompt user to confirm if they want to delete this item, if yes, run below


    API.deleteItem(id)
      .then(res => this.loadPortfolio())
      .catch(err => console.log(err));
  };


  //on click of the portfolio item open additional details
  getDetails = id => {

    API.getItem(id)
      .then(res => {
        console.log(res.data);
        this.setState({ title: res.data.title, url: res.data.url, imageUrl: res.data.imageUrl, githubUrl: res.data.githubUrl, description: res.data.description, modal:true })
      })
      .catch(err => console.log(err));
  };

  modalToggle = () => {
    this.setState({modal: false})
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
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
    }
  };

  displayTech = tech => {
    var display= "";
    for (var i = 0; i < tech.length; i++) {
      console.log(tech[i]);
      display += `${tech[i]} \n`
    }
    return display
  }

  render() {
    return (
      <div className="portfolioPage">
        <h2 className="text-center">Portfolio</h2>
        <hr />
        {this.state.projects.length ? (
          <div style={{display:"block",margin:"auto",width:"80%"}} className="text-center card-deck" >
            {this.state.projects.map(project => (
              <div key={project._id} className="card mb-4 work" onClick={() => this.getDetails(project._id)}>
                  <div className="view overlay">
                      <img className="img-fluid work-image" src={project.imageUrl} alt="Card"/>
                      <a href="#!">
                          <div className="mask rgba-white-slight"></div>
                      </a>
                  </div>
                  <div className="card-body">
                      <h4 className="card-title">{project.title}</h4>
                      <ul>{project.technologies.join(", ")}</ul>
                      <button type="button" className="btn btn-default btn-md" >Read more</button>
                  </div>
              </div>  
            ))}
          </div>
        ) : (
          <h4 className="text-center">No Results to Display</h4>
        )}
          <div className="add-work col-md-3 text-center">
              <img className="addImage" src="https://png.icons8.com/metro/1600/plus.png" alt="work" height="100" width="100"/>
              <div className="">
                <h2 className="">Add a Project</h2>
                <p>Admin Only</p>
              </div>
              <br />                
          </div>

        {this.state.modal ? (
          <Modal close={this.modalToggle} edit={this.editProject} status={this.state.modal} title={this.state.title} url={this.state.url} imageUrl={this.state.imageUrl} githubUrl={this.state.githubUrl} description={this.state.description}/>
          ) : (<div />)
        }
      </div>
    );
  }
}

export default PortfolioItems;
