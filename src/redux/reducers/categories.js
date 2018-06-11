import * as Constants from '../actions/constants';

const initialState = {
  categories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.CATEGORIES_GET_ALL:
      return {
        categories: action.payload,
      };

    default:
      return state;
  }
};
