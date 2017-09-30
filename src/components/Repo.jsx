import React from "react";
import PropTypes from "prop-types";


function Repo(props) {
  return(
    <div>
      <h1>{props.repo.name}</h1>
      <h3>{props.repo.url}</h3>
    </div>
  )
}


Repo.propTypes = {
  repo: PropTypes.object
};


export default Repo;
