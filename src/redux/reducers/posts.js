import * as Constants from '../actions/constants';

const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.POSTS_GET_ALL:
      return {
        posts: action.payload,
      };
    default:
      return state;
  }
};
