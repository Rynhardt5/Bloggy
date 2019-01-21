import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPostList } from '../../_actions';
import { List } from 'semantic-ui-react';

class PostList extends Component {
  componentDidMount() {
    this.props.getPostList();
  }

  renderList() {
    if (this.props.posts.length === 0) {
      return <div>No posts found, please create a new post</div>;
    }

    return this.props.posts.map(post => {
      return (
        <List.Item key={post.id}>
          <List.Content>
            <List.Content floated="right">
              <Link
                className="ui button mini primary"
                to={`/posts/edit/${post.id}`}
              >
                Edit
              </Link>
              <Link
                className="ui button mini negative"
                to={`/posts/delete/${post.id}`}
              >
                Delete
              </Link>
            </List.Content>
            <Link to={`/posts/show/${post.id}`}>
              <h2>
                <List.Header as="a">{post.title}</List.Header>
              </h2>
            </Link>
          </List.Content>
        </List.Item>
      );
    });
  }

  render() {
    return (
      <List divided relaxed>
        {this.renderList()}
      </List>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts)
  };
};

const connectedPostList = connect(
  mapStateToProps,
  { getPostList }
)(PostList);

export { connectedPostList as PostList };
