import React from 'react';
import Relay from 'react-relay';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props;

    return (
        <div>{post.body}</div>
    );
  }
}

export default Relay.createContainer(Post, {
  fragments: {
    post: () => Relay.QL`
      fragment on Post {
        id,
        body
      }
    `,
  },
});
