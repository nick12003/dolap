import Link from 'next/link';
import { useSelector } from 'react-redux';
import ThemeSwitch from '@/components/ThemeSwitch';
import LanguageSwitch from '@/components/LanguageSwitch';
import CenterWrapper from '@/components/CenterWrapper';
import Logo from '@/assets/logo.svg';
import ShoppingCart from '@/assets/shoppingCart.svg';

const Header = ({ openCart }) => {
  const quantity = useSelector((state) =>
    state.cart.list.reduce((acc, cur) => acc + cur.quantity, 0)
  );
  return (
    <CenterWrapper
      element={<header />}
      className="sticky top-0 z-50 border-b border-slate-100/10 bg-gray-100/70 backdrop-blur transition-colors py-3 shadow-lg dark:border-slate-50/[0.06] dark:bg-gray-900/80"
    >
      <CenterWrapper className="w-full max-w-[1280px] justify-between px-8">
        <CenterWrapper className="select-none">
          <Link href="/">
            <CenterWrapper>
              <Logo className="w-10 h-10 mr-2" />
              <span className="font-AudioWide">Dolap</span>
            </CenterWrapper>
          </Link>
        </CenterWrapper>
        <CenterWrapper>
          <LanguageSwitch />
          <ThemeSwitch className="ml-2" />
          <CenterWrapper className="relative ml-2 cursor-pointer">
            <ShoppingCart className="w-6 h-6" onClick={openCart} />
            <CenterWrapper className="absolute -top-[25%] -right-[25%] w-4 h-4 rounded-[50%] text-white text-xs  bg-red-500 pointer-events-none select-none">
              {quantity}
            </CenterWrapper>
          </CenterWrapper>
        </CenterWrapper>
      </CenterWrapper>
    </CenterWrapper>
  );
};

export default Header;
