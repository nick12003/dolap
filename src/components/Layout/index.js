import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="text-primary dark:text-primary-light bg-white dark:bg-[#333] w-screen max-h-screen overflow-y-auto overflow-x-hidden scrollbar-hide">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
