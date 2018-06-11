const url = 'http://localhost:3001';

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

export const getCategories = () => {
  return fetch(`${url}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);
};

export const getAllPosts = () => {
  return fetch(`${url}/posts`, { headers }).then(res => res.json());
};

export const getPostsByCategory = category => {
  return fetch(`${url}/${category}/posts`, { headers }).then(res => res.json());
};
