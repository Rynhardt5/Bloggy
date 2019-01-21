import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../_actions';
import { Header } from 'semantic-ui-react';
import PostForm from './PostForm';

const PostNew = props => {
  return (
    <>
      <Header as="h1">Create your post</Header>
      <PostForm
        onSubmit={formProps => props.createPost(formProps)}
        btnText="Create Post"
      />
    </>
  );
};

const connectedPostNew = connect(
  null,
  { createPost }
)(PostNew);

export { connectedPostNew as PostNew };
