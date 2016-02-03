import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';

import css from './Post.scss';

class Comment extends React.Component {
  static propTypes = {
    comment: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render(props) {
    const {comment} = this.props;
    return (
      <div className={css.Post}>
        <div className={css.PostBody}>
          <div className="TextRegion">
            {comment.body.map(({__dataID__, data, kind}) => (
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

export default Relay.createContainer(Comment, {
  fragments: {
    comment: () => Relay.QL`
      fragment on Post {
        id,
        body { data, kind }
        created_at,
        author { username }
      }
    `,
  },
});
