import ThemeSwitch from '@/components/ThemeSwitch';

import CenterWrapper from '@/components/CenterWrapper';
import ShoppingCart from '@/assets/shoppingCart.svg';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-100/10 bg-gray-100/70 backdrop-blur transition-colors py-3 shadow-lg dark:border-slate-50/[0.06] dark:bg-gray-900/80">
      <CenterWrapper className="max-w-[1280px] justify-between px-8">
        <CenterWrapper className="select-none">
          <span className="font-AudioWide">Dolap</span>
        </CenterWrapper>
        <CenterWrapper>
          <ThemeSwitch />
          <CenterWrapper className="relative w-fit ml-2 cursor-pointer">
            <ShoppingCart className="w-6 h-6" />
            <CenterWrapper className="absolute -top-[25%] -right-[25%] w-4 h-4 rounded-[50%] text-white text-xs  bg-red-500">
              0
            </CenterWrapper>
          </CenterWrapper>
        </CenterWrapper>
      </CenterWrapper>
    </header>
  );
};

export default Header;
