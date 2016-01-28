import React from 'react';
import Relay from 'react-relay';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        {post.body_content.map(({__dataID__, data, kind}) => (
          <div key={__dataID__}
               className="TextRegion" >
            <div className="RegionContent"
                 dangerouslySetInnerHTML={{ __html: data }} />
          </div>
        ))}
      </div>
    );
  }
}

export default Relay.createContainer(Post, {
  fragments: {
    post: () => Relay.QL`
      fragment on Post {
        id,
        body_content {
          kind
          data
        }
      }
    `,
  },
});
