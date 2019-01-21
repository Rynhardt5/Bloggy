import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../_actions';
import { Header } from 'semantic-ui-react';

class PostShow extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <Header as="h2">{this.props.post.title}</Header>
        <p>{this.props.post.body}</p>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts[ownProps.match.params.id]
  };
};

const connectedPostShow = connect(
  mapStateToProps,
  { getPost }
)(PostShow);

export { connectedPostShow as PostShow };
