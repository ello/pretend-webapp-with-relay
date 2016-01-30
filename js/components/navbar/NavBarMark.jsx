import React from 'react';
import {Link} from 'react-router';
import { ElloMark } from '../ElloIcons';

import css from './NavBar.scss';

export default () => (
  <Link className={css.NavbarMark} to="/explore">
    <ElloMark />
  </Link>
)
