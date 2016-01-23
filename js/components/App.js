import React from 'react';
import Relay from 'react-relay';
import PostPreview from './post_preview';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {root} = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            {root.posts.edges.map(({node}) => (
              <PostPreview key={node.id} post={node} root={root} />
            ))}
          </div>
        </div>
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
