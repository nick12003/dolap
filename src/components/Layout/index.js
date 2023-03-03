import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="text-primary dark:text-primary-light bg-white dark:bg-[#333]">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
