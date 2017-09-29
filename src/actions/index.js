import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

export const requestRepos = () => ({
  type: types.REQUEST_REPOS,
  songId: localSongId
});

export function fetchSongId() {
  return function (dispatch) {
    const localReposId = v4();
    // dispatch(requestRepos());
    return fetch("https://api.github.com/user/dyldlewis/starred").then(
      response => response.json(),
      error => console.log("An error occured.", error)
    ).then(function(json) {
    // dispatch(recieveRepos())
    });
  };
}
