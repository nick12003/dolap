import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="text-primary dark:text-primary-light bg-white dark:bg-[#333] w-screen max-h-screen overflow-y-auto overflow-x-hidden scrollbar-hide">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
