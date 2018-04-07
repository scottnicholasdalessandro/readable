import * as actionConst from './action-constants.js';
import makeActionCreator from './makeActionCreator.js';

// gets all posts, i might want to only request by category
export function requestPosts() {
  return {
    type: actionConst.REQUEST_POSTS
  };
}

export function requestByCategory(category) {
  return {
    type: actionConst.REQUEST_BY_CATEGORY,
    category
  };
}

export const receivePosts = posts => {
  return {
    type: actionConst.RECEIVE_POSTS,
    posts
  };
};

export function requestPost() {
  return {
    type: actionConst.REQUEST_POST
  };
}

export const receivePost = post => {
  return {
    type: actionConst.RECEIVE_POST,
    post
  };
};

export const requestCategories = () => ({
  type: actionConst.REQUEST_CATEGORIES
});

export const receivedCategories = categories => {
  return {
    type: actionConst.RECEIVED_CATEGORIES,
    categories
  };
};

export const votePost = makeActionCreator(actionConst.UP_DOWN_POST, 'post');

export function upDownUpdate(id, voteType) {
  console.log(voteType);
  return function(dispatch) {
    return fetch(`${actionConst.BASE_URI}/posts/${id}`, {headers: actionConst.AUTH, method: 'POST', body: JSON.stringify({option:voteType})},{option:voteType})
      .then(res => {
        
        return res.json();
      })
      .then(post => {
        console.log(post);
        dispatch(votePost(post));
      }
      )
      .catch(error => {
        console.error(error);
      });

  };
}

// thunk action creator:

export function fetchPosts(category) {
  return function(dispatch) {
    dispatch(requestPosts());

    return fetch(`${actionConst.BASE_URI}/posts`, {headers: actionConst.AUTH, method: 'GET'})
      .then(res => {
        return res.json();
      })
      .then(posts => dispatch(receivePosts(posts)));
  };
}

export function fetchPost(postID) {
  return function(dispatch) {
    dispatch(requestPost());

    return fetch(`${actionConst.BASE_URI}/posts/${postID}`, {headers: actionConst.AUTH, method: 'GET'})
      .then(res => {
        return res.json();
      })
      .then(post => dispatch(receivePost(post)));
  };
}

export function fetchCategories() {
  return function(dispatch) {
    dispatch(requestCategories());

    return fetch(`${actionConst.BASE_URI}/categories`, {headers: actionConst.AUTH, method: 'GET'})
      .then(res => {
        return res.json();
      })
      .then(json => dispatch(receivedCategories(json.categories)));
  };
}

// export const fetchCategory = category => {
//   return function(dispatch) {
//     dispatch(requestCategory());

//     return fetch(`${actionConst.BASE_URI}/${category}/posts`, {headers: actionConst.AUTH, method: 'GET'})
//       .then(res => {
//         return res.json();
//       })
//       .then(json => dispatch(receivePosts(json)));
//   };
// };
