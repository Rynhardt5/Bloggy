import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { deletePost, getPost } from '../../_actions';

class PostDelete extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deletePost(id)}
          className="ui primary button"
        >
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.post) {
      return 'Are you sure you want to delete this post?';
    } else {
      return `Are you sure you want to delete post with title: ${
        this.props.post.title
      }`;
    }
  }

  render() {
    return (
      <Modal
        title="Delete Post"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => {
          history.push('/');
        }}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

const connectedPostDelete = connect(
  mapStateToProps,
  { deletePost, getPost }
)(PostDelete);

export { connectedPostDelete as PostDelete };
