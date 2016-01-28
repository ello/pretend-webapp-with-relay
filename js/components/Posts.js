import React from 'react';
import Relay from 'react-relay';
import PostPreview from './post_preview';

import css from './Posts.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {root} = this.props;
    return (
      <div className={css.Posts}>
        {root.posts.edges.map(({node}) => (
            <PostPreview key={node.id} post={node} root={root} />
        ))}
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  initialVariables: {
    count: 20,
    order: "-id"
  },
  fragments: {
    root: () => Relay.QL`
      fragment on Viewer {
        id,
        posts(first: $count, order: $order) {
          edges {
            node {
              id,
              ${PostPreview.getFragment('post')}
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `
  },
});
