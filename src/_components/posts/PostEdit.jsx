import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import { getPost, editPost } from '../../_actions';
import PostForm from './PostForm';

export default class PostEdit extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <Header as="h1">Edit your post</Header>
        <PostForm
          initialValues={_.pick(this.props.post, 'title', 'body')}
          onSubmit={formProps =>
            this.props.editPost(this.props.match.params.id, formProps)
          }
          btnText="Update Post"
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

const connectedPostEdit = connect(
  mapStateToProps,
  { getPost, editPost }
)(PostEdit);

export { connectedPostEdit as PostEdit };
