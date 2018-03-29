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
        description: this.state.description
      })
        .then(res => this.loadPortfolio())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <div>
        <h2 className="text-center">Portfolio</h2>
        {this.state.projects.length ? (
          <div style={{display:"block",margin:"auto"}} className="text-center">
            {this.state.projects.map(project => (
              <div key={project._id} className="work col-md-3" onClick={() => this.getDetails(project._id)}>
                  <img className="" src={project.imageUrl} alt="work" height="250" width="250"/>
                  <div className="">
                    <h2 className="">{project.title}</h2>
                  </div>
                  <br />                
              </div>
            ))}
          </div>
        ) : (
          <h4 className="text-center">No Results to Display</h4>
        )}
          <div className="work col-md-3 text-center">
              <img className="" src="https://png.icons8.com/metro/1600/plus.png" alt="work" height="250" width="250"/>
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
