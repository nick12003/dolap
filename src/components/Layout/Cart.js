import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';
import Image from 'next/image';

import CenterWrapper from '@/components/CenterWrapper';
import Quantity from '@/components/Quantity';
import Button from '@/components/Button';
import { add, reduce, remove, reset } from '@/store';

import Back from '@/assets/back.svg';

const Cart = ({ isCartOpen, isOpened, closeCart }) => {
  const { t } = useTranslation(['common']);
  const { locale, push } = useRouter();
  const dispatch = useDispatch();
  const { list, productCnt, totalPrice } = useSelector((state) => ({
    list: state.cart.list,
    productCnt: state.cart.list.reduce((acc, cur) => acc + cur.quantity, 0),
    totalPrice: state.cart.list.reduce((acc, cur) => {
      const { price } = cur[locale];
      return acc + cur.quantity * price;
    }, 0),
  }));
  return (
    <div
      className={classNames(
        'fixed w-full sm:max-w-[400px] h-screen p-6 bg-white dark:bg-[#333] z-[52] -right-full',
        {
          'animate-showCart': isOpened && isCartOpen,
          'animate-hideCart': isOpened && !isCartOpen,
        }
      )}
    >
      <div className="flex items-center">
        <button className="mr-4" onClick={closeCart}>
          <Back />
        </button>
        <h5 className="mr-2">{t('Cart')}</h5>
        <div className=" text-red-500">{`(${productCnt} ${t('Items')})`}</div>
      </div>
      <div className="flex flex-col h-[70vh] my-4 overflow-y-auto overscroll-y-none scrollbar-hide">
        {list.map(({ pid, imgUrl, quantity, ...other }) => {
          const { name, price } = other[locale];
          return (
            <div key={pid} className="flex my-4">
              <div className="w-[300px] sm:w-[250px]">
                <Image
                  className="w-full bg-slate-300/50 rounded-xl"
                  width={250}
                  height={250}
                  src={imgUrl}
                  alt="product"
                />
              </div>
              <div className="flex flex-col w-full p-4 relative">
                <div className="font-fat text-xl">{name}</div>
                <div className="my-4">{`${t('Unit')} ${price}`}</div>
                <Quantity
                  className="w-fit my-4"
                  quantity={quantity}
                  onMinus={() => {
                    dispatch(reduce({ pid, quantity: 1 }));
                  }}
                  onPuls={() => {
                    dispatch(add({ pid, quantity: 1 }));
                  }}
                />
                <button
                  className="w-fit absolute bottom-4 right-4 text-red-500"
                  onClick={() => {
                    dispatch(remove({ pid }));
                  }}
                >
                  {t('Delete')}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <CenterWrapper direction="vertical">
        <div className="my-2 md:my-6 font-fat text-xl">{`${t('Total')}: ${t(
          'Unit'
        )} ${totalPrice}`}</div>
        <CenterWrapper>
          <Button
            primary
            className={classNames('py-2 px-16')}
            disable={totalPrice <= 0}
            onClick={() => {
              closeCart();
              dispatch(reset());
              push('/thanks');
            }}
          >
            {t('Pay')}
          </Button>
        </CenterWrapper>
      </CenterWrapper>
    </div>
  );
};

export default Cart;
