import React from 'react';
import Relay from 'react-relay';
import networkLayer from 'libs/networkLayer';

export default React.createClass({
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
    event.preventDefault();
    const { username, password } = this.state;

  },

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this._handleAuth}>
        <input type="text" value={username} onChange={this._handleUsername} />
        <input type="password" value={password} onChange={this._handlePassword} />
        <button type="submit">Submit</button>
      </form>
    )
  }
});
