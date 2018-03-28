import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";

class PortfolioItems extends Component {
  state = {
    projects: [],
    title: "",
    imageUrl: "",
    url: ""
  };

  componentDidMount() {
    // this.loadPortfolio();
  }

  // loadPortfolio = () => {
  //   API.getItems()
  //     .then(res =>
  //       this.setState({ items: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="text-center">Portfolio</div>
    );
  }
}

export default PortfolioItems;
