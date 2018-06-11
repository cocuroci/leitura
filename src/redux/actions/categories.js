import * as API from '../../api';
import * as Constants from './constants';

export const categories = values => {
  return {
    type: Constants.CATEGORIES_GET_ALL,
    payload: values,
  };
};

export const getAllCategories = () => {
  return (dispatch, getState) => {
    API.getCategories().then(res => dispatch(categories(res)));
  };
};
