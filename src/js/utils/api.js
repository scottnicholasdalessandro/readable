const BASE_URI = 'http://localhost:3001';
const AUTH = {Authorization: 'hello-world'};

export const fetchPosts = () => fetch(`${BASE_URI}/posts`, {headers: AUTH, method: 'GET'}).then(res => res.json());

export const fetchCategories = () =>
  fetch(`${BASE_URI}/categories`, {headers: AUTH, method: 'GET'}).then(res => {
    return res.json();
  });
