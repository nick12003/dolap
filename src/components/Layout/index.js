import { useState, useEffect, cloneElement } from 'react';
import classNames from 'classnames';

import Header from './Header';
import Cart from './Cart';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isCartOpen, setCartState] = useState(false);

  /**
   * 設定為 true，代表開啟過購物車，避免初次render就先跑一次關閉動畫
   */
  useEffect(() => {
    if (isCartOpen) {
      setIsOpened(true);
    }
  }, [isCartOpen]);

  const openCart = () => setCartState(true);
  const closeCart = () => setCartState(false);

  return (
    <>
      <Cart {...{ isCartOpen, isOpened, closeCart }} />
      <div
        className={classNames('h-screen w-full fixed bg-black/60 opacity-0', {
          'animate-showMask': isOpened && isCartOpen,
          'animate-hideMask': isOpened && !isCartOpen,
        })}
        onClick={closeCart}
      />
      <Header {...{ openCart }} />
      <main className="relative">{cloneElement(children, { openCart })}</main>
      <Footer />
    </>
  );
};

export default Layout;
