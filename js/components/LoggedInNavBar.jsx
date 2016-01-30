import React from 'react';
import {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {ElloMark} from './ElloIcons';

const LoggedInNavBar = (props) => {
  return (
    <nav role="navigation">
      <Link className="NavbarMark" to="/explore">
        <ElloMark />
      </Link>
    </nav>
  );
};

export default LoggedInNavBar;
