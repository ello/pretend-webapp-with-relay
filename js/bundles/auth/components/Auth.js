import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {logIn} from '../actions/auth';


const Auth = React.createClass({
  getInitialState() {
    return {
      username: null,
      password: null
    }
  },

  _handleUsername(event) {
    this.setState({username: event.target.value});
  },
  _handlePassword(event) {
    this.setState({password: event.target.value});
  },

  _handleAuth(event) {
    const {dispatch} = this.props;
    const {username, password} = this.state;
    event.preventDefault();
    dispatch(logIn(username, password))
  },

  render() {
    const {username, password} = this.state;
    return (
      <form onSubmit={this._handleAuth}>
        <input type="text" value={username} onChange={this._handleUsername} />
        <input type="password" value={password} onChange={this._handlePassword} />
        <button type="submit">Submit</button>
      </form>
    );
  },
});

Auth.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Auth);
