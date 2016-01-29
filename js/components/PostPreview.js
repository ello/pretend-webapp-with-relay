import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';

import css from './Post.scss';

class PostPreview extends React.Component {
  static propTypes = {
    post: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {post, post: {author}} = this.props;
    return (
      <div className={css.Post}>
        <header className={css.PostHeader} key={`PostHeader_${post.id}`}>
          <div className={css.PostHeaderAuthor}>
            <a className={css.PostHeaderLink} to={`/${author.name}`}>
              <span>{`@${author.username}`}</span>
            </a>
          </div>
        </header>
        <div className={css.PostBody}>
          <div className="TextRegion">
            {post.body.map(({__dataID__, data, kind}) => (
              <div
                key={__dataID__}
                className="TextRegion" >
                <div
                  className="RegionContent"
                  dangerouslySetInnerHTML={{__html: data}} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
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
        body { data, kind }
        created_at,
        content
        author {
          username
        }
      }
    `
  }
});
