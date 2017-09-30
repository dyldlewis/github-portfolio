import React from "react"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRepos } from "./../actions";
import Repo from "./Repo"

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.masterRepoList)
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getRepos());
  }

  handleButtonClick() {
  }


  render() {
    var display = {
      textAlign: "center"
    }
    return(
      <div style={display}>
        <h1>My Projects</h1>
       {this.props.masterRepoList.map((repo) =>
       <Repo
       repo={repo}
       key={repo.id}
       />
       )}
   </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    masterRepoList : state
  };
};

export default connect(mapStateToProps)(Portfolio);
