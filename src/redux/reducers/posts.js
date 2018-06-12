import * as Constants from '../actions/constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.POSTS_GET_ALL:
      return action.payload;
    default:
      return state;
  }
};
