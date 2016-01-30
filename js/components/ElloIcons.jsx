import React from 'react';
import {SVGBox} from './SVGComponents';

import css from './ElloIcons.scss';

const fortyPointSmilePath = () =>
  <path d="M20.5 32c-5.5 0-10.2-3.7-11.6-9-.2-.6.2-1.2.8-1.4.6-.2 1.2.2 1.4.8 1.1 4.3 5 7.3 9.4 7.3s8.3-3 9.4-7.3c.2-.6.8-1 1.4-.8.6.2 1 .8.8 1.4-1.3 5.3-6.1 9-11.6 9z"/>

export const ElloMark = (props) => (
  <SVGBox className={css.ElloMark}>
    <path d="M0 0h40v40h-40z" />
    {fortyPointSmilePath()}
  </SVGBox>
);
