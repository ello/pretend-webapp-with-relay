import React from 'react'
import Relay from 'react-relay'

class PostPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {post} = this.props;
    return (
      <div className="post-preview">
        <a href="#">
          <h2 className="post-title">
            { post.body }
          </h2>
          <div className="post-body" dangerouslySetInnerHTML={{__html: post.excerpt }} />
        </a>
        <p className="post-meta">
          <span className="author">
            Posted by: <em>{ post.author.name }</em>
          </span>
        </p>
      </div>
    )
  }
}

export default Relay.createContainer(PostPreview, {
  initialVariables: {
    count: 1000
  },

  fragments: {
    post: () => Relay.QL`
      fragment on Post {
        id,
        body,
        created_at,
        author {
          name
        }
      }
    `
  }
});
