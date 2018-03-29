import React from "react";



const Modal = props => (
  <div className="modal" data-status={props.status}>
    <div className="modal-left" style={{backgroundImage:`url(${props.imageUrl})`,backgroundSize:"500px 500px"}}>
    </div>
    <div className="modal-right">
      <div className="row">
        <a href={props.url} target="_blank"><span className="fa fa-link links"></span></a>
        <a href={props.githubUrl} target="_blank"><span className="fa fa-github links"></span></a>
      </div>
      <h2>{props.title}</h2>
      <br/>
      <p><strong>Description:</strong> {props.description}</p>
      <div className="close">
      <button onClick={props.edit} className="edit">
        <span className="fa fa-pencil"></span>
      </button>
      <button onClick={props.close}>
        <span className="fa fa-close"></span>
      </button>
      </div>
    </div>
  </div>
);


export default Modal;
