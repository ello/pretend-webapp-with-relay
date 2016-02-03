import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import LoggedInNavBar from 'components/navbar/LoggedInNavBar';

import style from './Home.scss';

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <LoggedInNavBar />
        <div className={style.Main}>
          <Link to="/auth">Sign in</Link>
          <h2>Oh hai</h2>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {token} = state;
  const isLoggedIn = token ? true : false;
  return {token, isLoggedIn};
}

export default connect(mapStateToProps)(Home);
