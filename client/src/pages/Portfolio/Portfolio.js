import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import Modal from "../Modal";
import AdminModal from "../AdminModal";

class PortfolioItems extends Component {
  state = {
    projects: [],
    title: "",
    url: "",
    imageUrl: "",
    githubUrl: "",
    description: "",
    technologies: "",
    modal: false,
    adminModal: false
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

  adminModalToggle = () => {
    this.setState({adminModal: false})
  };

  editProjects = () => {
    this.setState({modal: false, adminModal: true})
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <div className="portfolioPage" id="portfolio">
        <h2 className="text-center">Portfolio</h2>
        <hr />
        <br />
        <br />
        <br />
        {this.state.projects.length ? (
          <div className="text-center card-deck" >
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
                      <p>{project.technologies}</p>
                      <button type="button" className="btn btn-default btn-md" >Read more</button>
                  </div>
              </div>  
            ))}
          </div>
        ) : (
          <h4 className="text-center">No Results to Display</h4>
        )}
          <div className="add-work text-center" onClick={() => this.editProjects()} style={{borderStyle:"thin",borderRadius:"5px",boxShadow:"0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)",width:"19%"}}>
            <i className="fa fa-pencil addImage" style={{color:"#FFCC00"}}></i>
              <div className="">
                <h4 className="">Admin Mode</h4>
                <p><em>Add/edit/delete projects</em></p>
              </div>
              <br />                
          </div>

        {(this.state.modal && !this.state.adminModal) ? (
          <Modal close={this.modalToggle} edit={this.editProjects} status={this.state.modal} title={this.state.title} url={this.state.url} imageUrl={this.state.imageUrl} githubUrl={this.state.githubUrl} description={this.state.description}/>
          ) : (<div />)
        }
        {(!this.state.modal && this.state.adminModal) ? (
          <AdminModal />
          ) : (<div />)
        }

      </div>
    );
  }
}

export default PortfolioItems;
