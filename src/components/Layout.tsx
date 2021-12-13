import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout: FC = () => {
  return (
    <div className="">
      <div className="fixed h-16 shadow-md w-screen bg-white z-10">
        <div className="grid-left-right h-full top">
          <Header />
          <Nav />
        </div>
      </div>
      <div className="pt-16 grid-left-right h-screen">
        <Sidebar classNames="hidden sm:block" />
        <MainContentArea />
      </div>
    </div>
  );
};

const MainContentArea: FC = () => {
  return (
    <main className="m-3">
      <Outlet />
    </main>
  );
};

export default Layout;
