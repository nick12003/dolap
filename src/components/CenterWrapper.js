import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CenterWrapper = ({
  element = <div />,
  children,
  className,
  direction = 'horizontal',
  ...rest
}) =>
  React.cloneElement(
    element,
    {
      className: classNames(
        'flex items-center justify-center',
        { 'flex-col': direction === 'vertical' },
        className
      ),
      ...rest,
    },
    children
  );

CenterWrapper.defaultProps = {
  element: <div />,
  className: '',
  direction: 'horizontal',
};

CenterWrapper.propTypes = {
  element: PropTypes.element,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default CenterWrapper;
