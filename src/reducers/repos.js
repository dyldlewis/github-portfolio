import constants from "./../constants";
const { types } = constants;


const repos = (state = [], action) => {
  switch(action.type) {
    case types.REQUEST_REPOS:
    var newState = action.repos;
    return newState;
    case types.RECEIVE_REPOS:
    console.log(action.repos)
    var newState = action.repos;
    return newState
    default:
      return state;
  }
}

export default repos;
