import Link from 'next/link';
import Instagram from '@/assets/instagram.svg';
import Facebook from '@/assets/facebook.svg';

const Footer = () => {
  return (
    <footer className="relative h-[70px] md:h-[100px] border-t border-slate-900/10 ">
      <div className="h-full flex flex-col items-center justify-center">
        <div className="mb-3 flex space-x-4">
          <Link href="/">
            <Facebook className="h-8 w-8 hover:text-[#4267B2]" />
          </Link>
          <Link href="/">
            <Instagram className="h-8 w-8 hover:text-[#f6005e]" />
          </Link>
        </div>
        <div className="flex space-x-2 text-sm text-gray-500">
          <div>{`Copyright © 2022 - ${new Date().getFullYear()}`}</div>
          <Link href="/">Nick Chen</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
