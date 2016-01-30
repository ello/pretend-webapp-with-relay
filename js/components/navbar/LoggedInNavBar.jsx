import React from 'react';
import NavBarMark from './NavBarMark';

import css from './NavBar.scss';

const LoggedInNavBar = (props) => {
  return (
    <nav className={`${css.Navbar} ${css.isLoggedIn}`} role="navigation">
      <NavBarMark />
    </nav>
  );
};

export default LoggedInNavBar;
