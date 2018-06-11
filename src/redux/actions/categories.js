import * as API from '../../api';
import * as Constants from './constants';

export const categories = values => {
  return {
    type: 'CATEGORIES_LOADED',
    payload: values,
  };
};

export const getAllCategories = () => {
  return (dispatch, getState) => {
    API.getCategories().then(res => dispatch(categories(res)));
  };
};
