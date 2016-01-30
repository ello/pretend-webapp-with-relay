import React, {PropTypes} from 'react';

import css from './SVGComponents.scss';

export const SVGComponent = ({children, ...rest}) =>
  <svg {...rest}>
    {children}
  </svg>

SVGComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SVGIcon = ({children, className}) => {
  return (
    <SVGComponent
      width="20"
      height="20"
      className={className + ' SVGIcon'}>
      {children}
    </SVGComponent>
  );
};

SVGIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export const SVGBox = ({children, className}) => {
  return (
    <SVGComponent
      width="40"
      height="40"
      className={`${className} ${css.SVGBox}`}>
      {children}
    </SVGComponent>
  );
};

SVGBox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
