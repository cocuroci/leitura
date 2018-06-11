const initialState = {
  categories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CATEGORIES_LOADED':
      return {
        categories: action.payload,
      };

    default:
      return state;
  }
};
