import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ className, href, imgUrl, name, price }) => {
  const { t } = useTranslation(['common']);
  return (
    <Link
      className={classNames('hover:scale-110 duration-150 cursor-pointer', className)}
      href={href}
    >
      <Image
        className="w-full bg-slate-300/50 rounded-xl"
        width={250}
        height={250}
        src={imgUrl}
        alt="product"
      />
      <h6 className="font-semibold dark:text-white">{name}</h6>
      <div className="font-black font-fat">{`${t('Unit')} ${price}`}</div>
    </Link>
  );
};

ProductCard.defaultProps = {
  className: '',
};

ProductCard.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
