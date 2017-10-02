import repos from './../../src/reducers/repos';
import c from './../../src/constants';

describe('Get Repos Reducer', () => {
  let action;

  const priorRepo = {
    id: 94116378,
    name: 'twitter-clone',
    language: 'JavaScript',
    link: 'example.com',
    owner: 'dyldlewis'
  }
  test('should return equivalent state if no action type is recognized', () => {
    expect(repos([], { type: null })).toEqual([]);
  });

  test('should update state with repo from api', () => {
    action = {
      type: c.RECEIVE_REPOS,
      json: [{
        name: 'twitter-clone',
        language: 'JavaScript',
        link: 'example.com',
        owner: 'dyldlewis'
      }]
    };
    let postRepo = {
      id: 94116378,
      name: 'twitter-clone',
      language: 'JavaScript',
      link: 'example.com',
      owner: 'dyldlewis'
    }
    expect(repos([ priorRepo ], action)).toEqual([ postRepo ]);
  });

});
