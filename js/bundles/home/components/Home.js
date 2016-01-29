import React from 'react';
import { Link } from 'react-router';

export default (props) => (
  <div>
    <Link to="/auth">Sign in</Link>
    <h2>Oh hai</h2>
    <div className="yep">
      {props.children}
    </div>
  </div>
)
