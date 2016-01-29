import Relay from 'react-relay';

export default function (options) {
  return new Relay.DefaultNetworkLayer('/graphql', {
    credentials: 'same-origin',
    ...options
  });
}
