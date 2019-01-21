import api from '../_api';
import {
  CREATE_POST,
  GET_POST,
  GET_POST_LIST,
  EDIT_POST,
  DELETE_POST
} from '../_constants';
import history from '../history';

export const createPost = formProps => async dispatch => {
  const response = await api
    .post('/posts', { post: { ...formProps } })
    .catch(err => console.log(err.response.data.errors));

  console.log('create post');

  dispatch({ type: CREATE_POST, payload: response.data.post });

  history.push('/');
};

export const getPost = id => async dispatch => {
  const response = await api.get(`/posts/${id}`).catch(err => console.log(err));

  console.log('get post');

  dispatch({ type: GET_POST, payload: response.data.post });
};

export const getPostList = () => async dispatch => {
  const response = await api.get('/posts').catch(err => console.log(err));

  console.log('get post list');

  dispatch({ type: GET_POST_LIST, payload: response.data.posts });
};

export const editPost = (id, formProps) => async dispatch => {
  const response = await api.patch(`/posts/${id}`, { post: formProps });

  dispatch({ type: EDIT_POST, payload: response.data.post });

  history.push('/');
};

export const deletePost = id => async dispatch => {
  await api.delete(`/posts/${id}`).catch(err => console.log(err));

  console.log('post deleted');

  dispatch({ type: DELETE_POST, payload: id });

  history.push('/');
};
