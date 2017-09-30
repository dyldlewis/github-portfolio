import React from "react";
import PropTypes from "prop-types";


function Repo(props) {

  var repoStyle = {
    border: "solid black 1px",
    marginTop: "10px",
    marginLeft: "80px",
    marginRight: "80px"
  }

  return(
    <div style={repoStyle}>
      <h1>{props.repo.name}</h1>
      <a href="{props.repo.url}">View this project</a>
    </div>
  )
}


Repo.propTypes = {
  repo: PropTypes.object
};


export default Repo;
