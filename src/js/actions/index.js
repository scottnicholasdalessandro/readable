import * as actionConst from './action-constants.js';
import makeActionCreator from './makeActionCreator.js';

export function sortValues(value) {
  return {
    type: actionConst.SORT_VALUES,
    value
  };
}

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

export const scorePost = makeActionCreator(actionConst.UP_DOWN_POST, 'post');
export const scoreComment = makeActionCreator(actionConst.UP_DOWN_COMMENT, 'comment');

export function upDownUpdate(id, direction, scoreType) {
  return function(dispatch) {
    if (scoreType === 'post') {
      return fetch(
        `${actionConst.BASE_URI}/posts/${id}`,
        {headers: actionConst.AUTH, method: 'POST', body: JSON.stringify({option: direction})},
        {option: direction}
      )
        .then(res => {
          return res.json();
        })
        .then(post => dispatch(scorePost(post)))
        .catch(error => {
          console.error(error);
        });
    } else {
      return fetch(
        `${actionConst.BASE_URI}/comments/${id}`,
        {headers: actionConst.AUTH, method: 'POST', body: JSON.stringify({option: direction})},
        {option: direction}
      )
        .then(res => {
          return res.json();
        })
        .then(comment => dispatch(scoreComment(comment)))
        .catch(error => {
          console.error(error);
        });
    }
  };
}

export function deletePostAPI(postID) {
  return function(dispatch) {
    return fetch(`${actionConst.BASE_URI}/posts/${postID}`, {headers: actionConst.AUTH, method: 'DELETE'})
      .then(res => res.json())
      .then(data => dispatch(deletePost(postID)))
      .catch(error => console.error(error));
  };
}

export const createPost = makeActionCreator(actionConst.CREATE_POST, 'post');
export const updatePost = makeActionCreator(actionConst.UPDATE_POST, 'post');
export const deletePost = makeActionCreator(actionConst.DELETE_POST, 'post');
export const addPostComment = makeActionCreator(actionConst.ADD_POST_COMMENT, 'parentId');
export const removePostComment = makeActionCreator(actionConst.REMOVE_POST_COMMENT, 'parentId');

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

export function updatePostAPI(postInfo) {
  return function(dispatch) {
    return fetch(`${actionConst.BASE_URI}/posts/${postInfo.id}`, {
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
export const createComment = makeActionCreator(actionConst.CREATE_COMMENT, 'comments');
export const updateComment = makeActionCreator(actionConst.UPDATE_COMMENT, 'comments');
export const deleteComment = makeActionCreator(actionConst.DELETE_COMMENT, 'comments');

export function deleteCommentAPI(comment) {
  return function(dispatch) {
    debugger;
    return fetch(`${actionConst.BASE_URI}/comments/${comment}`, {
      headers: actionConst.AUTH,
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        dispatch(removePostComment(comment.parentId));
        dispatch(deleteComment(comment));
      })
      .catch(error => console.error(error));
  };
}
export function fetchCommentsAPI(postID) {
  return function(dispatch) {
    dispatch(fetchComments(postID));

    return fetch(`${actionConst.BASE_URI}/posts/${postID}/comments`, {headers: actionConst.AUTH, method: 'GET'})
      .then(res => res.json())
      .then(data => dispatch(receivedComments(data, postID)))
      .catch(error => console.error(error));
  };
}

export function updateCommentAPI(commentInfo) {
  const {body, timestamp} = commentInfo;
  return function(dispatch) {
    debugger;
    return fetch(`${actionConst.BASE_URI}/comments/${commentInfo.id}`, {
      headers: actionConst.AUTH,
      method: 'PUT',
      body: JSON.stringify(commentInfo)
    })
      .then(res => res.json())
      .then(data => {
        dispatch(updateComment(data));        
      })
      .catch(error => console.error(error));
  };
}

export function createCommentAPI(newComment) {
  return function(dispatch) {    
    return fetch(`${actionConst.BASE_URI}/comments`, {
      headers: actionConst.AUTH,
      method: 'POST',
      body: JSON.stringify(newComment)
    })
      .then(res => res.json())
      .then(data => {
        dispatch(addPostComment(data.parentId));
        dispatch(createComment(data));
        
      })
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
