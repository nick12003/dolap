import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ className, children, onClick, primary, disable }) => {
  return (
    <button
      className={classNames(
        'flex items-center justify-center text-xl font-bold rounded-lg shadow-lg',
        {
          'border border-primary bg-white text-primary hover:bg-primary hover:text-white': !primary,
          'bg-primary text-white shadow-lg hover:bg-primary/90': primary,
        },
        {
          'bg-primary-light hover:bg-primary-light cursor-not-allowed': disable,
        },
        className
      )}
      onClick={() => {
        if (!disable) {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
  primary: false,
  disable: false,
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  disable: PropTypes.bool,
};

export default Button;
