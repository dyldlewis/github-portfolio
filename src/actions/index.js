import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

export const requestRepos = () => ({
  type: types.REQUEST_REPOS,
  repos: []
});

export const recieveRepos = (repos) => ({
  type: types.RECEIVE_REPOS,
  repos
})

export function getRepos() {
  console.log("stage_ONE")
  return function (dispatch) {
    console.log("FunctionFired")
    dispatch(requestRepos());
    return fetch("https://api.github.com/users/dyldlewis/starred").then(
      response => response.json(),
      error => console.log("An error occured.", error)
    ).then(function(json) {
      console.log(json)
      var repos = [];
      for (var i = 0; i < json.length; i ++) {
        const name = json[i].name;
        const url = json[i].html_url;
        const owner = json[i].owner.login;
      const newRepo = {
        name: name,
        url: url,
        owner: owner,
        id: v4()
      }
      repos.push(newRepo)
      }
      console.log(repos);
      dispatch(recieveRepos(repos));
    });
  };
}
