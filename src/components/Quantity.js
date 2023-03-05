import PropTypes from 'prop-types';
import classNames from 'classnames';

import CenterWrapper from '@/components/CenterWrapper';
import Puls from '@/assets/plus.svg';
import Minus from '@/assets/minus.svg';

const Quantity = ({ quantity, onPuls, onMinus, className }) => {
  return (
    <div className={classNames('flex items-center border font-fat select-none', className)}>
      <CenterWrapper
        className={classNames('h-8 w-8 cursor-pointer', {
          'cursor-not-allowed text-primary/50 dark:text-primary-light/50': quantity <= 1,
        })}
        onClick={() => {
          if (quantity > 1) {
            onMinus();
          }
        }}
      >
        <Minus />
      </CenterWrapper>
      <CenterWrapper className="border-r border-l text-xl h-8 w-16">{quantity}</CenterWrapper>
      <CenterWrapper className="h-8 w-8 cursor-pointer" onClick={onPuls}>
        <Puls />
      </CenterWrapper>
    </div>
  );
};

Quantity.defaultProps = {
  className: '',
};

Quantity.propTypes = {
  quantity: PropTypes.number.isRequired,
  onPuls: PropTypes.func.isRequired,
  onMinus: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Quantity;
