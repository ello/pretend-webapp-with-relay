import React from 'react'
import Relay from 'react-relay'

class PostPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post, post: { author } } = this.props;
    return (
      <div className="Post">
        <header className="PostHeader" key={`PostHeader_${post.id}`}>
          <div className="PostHeaderAuthor">
            <a className="PostHeaderLink" to={`/${author.name}`}>
              <span>{`@${author.username}`}</span>
            </a>
          </div>
        </header>
        <div className="TextRegion">
        {post.body_content.map(({__dataID__, data, kind}) => (
          <div key={__dataID__}
            className="TextRegion" >
            <div className="RegionContent"
                 dangerouslySetInnerHTML={{ __html: data }} />
          </div>
        ))}
        </div>
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
        content
        body_content { data kind }
        author {
          username
        }
      }
    `
  }
});
