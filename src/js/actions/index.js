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

// UP_DOWN_VOTE

export const votePost = makeActionCreator(actionConst.UP_DOWN_POST, 'post');

export function upDownUpdate(id, voteType) {
  console.log(voteType);
  return function(dispatch) {
    return fetch(
      `${actionConst.BASE_URI}/posts/${id}`,
      {headers: actionConst.AUTH, method: 'POST', body: JSON.stringify({option: voteType})},
      {option: voteType}
    )
      .then(res => {
        return res.json();
      })
      .then(post => dispatch(votePost(post)))
      .catch(error => {
        console.error(error);
      });
  };
}

export const deletePost = makeActionCreator(actionConst.DELETE_POST, 'post');

export function deletePostAPI(postID) {
  return function(dispatch) {
    return fetch(`${actionConst.BASE_URI}/posts/${postID}`, {headers: actionConst.AUTH, method: 'DELETE'})
      .then(res => res.json())
      .then(data => dispatch(deletePost(postID)))
      .catch(error => console.error(error));
  };
}

export const createPost = makeActionCreator(actionConst.CREATE_POST, 'post');

export function createPostAPI(postInfo) {
  return function(dispatch) {
    return fetch(`${actionConst.BASE_URI}/posts`, {
      headers: actionConst.AUTH,
      method: 'POST',
      body: JSON.stringify(postInfo)
    })
      .then(res => res.json())
      .then(data => dispatch(createPost(postInfo)))
      .catch(error => console.error(error));
  };
}

export const updatePost = makeActionCreator(actionConst.UPDATE_POST, 'post');

export function updatePostAPI(postInfo) {
  return function(dispatch) {
    return fetch(`${actionConst.BASE_URI}/posts`, {
      headers: actionConst.AUTH,
      method: 'PUT',
      body: JSON.stringify(postInfo)
    })
      .then(res => res.json())
      .then(data => dispatch(updatePost(postInfo)))
      .catch(error => console.error(error));
  };
}

export const fetchComments = makeActionCreator(actionConst.FETCH_COMMENTS, 'comments');
export const receivedComments = makeActionCreator(actionConst.RECEIVED_COMMENTS, 'comments', 'postID');

export function fetchCommentsAPI(postID) {
  return function(dispatch) {
    dispatch(fetchComments(postID));

    return fetch(`${actionConst.BASE_URI}/posts/${postID}/comments`, {headers: actionConst.AUTH, method: 'GET'})
      .then(res => res.json())
      .then(data => dispatch(receivedComments(data, postID)))
      .catch(error => console.error(error));
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
