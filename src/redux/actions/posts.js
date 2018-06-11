import * as API from '../../api';
import * as Constants from './constants';

export const posts = values => {
  return {
    type: Constants.POSTS_GET_ALL,
    payload: values,
  };
};

export const getAllPosts = () => {
  return (dispatch, getState) => {
    API.getAllPosts().then(res => {
      dispatch(posts(res));
    });
  };
};
