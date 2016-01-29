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

    fetch('/knock/auth_token', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({auth: {username, password}})
    }).then(response => response.json())
      .then(json => {
        console.log(json);

        localStorage.setItem('ello.jwt', json.jwt);
        Relay.injectNetworkLayer(networkLayer({
          headers: `Bearer ${json.jwt}`
        }));
        let location = window.location;
        var { protocol, hostname, port, pathname } = location;
        let locationString = `${protocol}//${hostname}:${port}/`;
        debugger;
        document.location.assign(locationString);

      }).catch(err => console.log(err));
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
