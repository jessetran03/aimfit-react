import { FC } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout: FC = () => {
  return (
    <div className="grid-top-bottom">
      <div className="bg-gray-100 shadow">
        <div className="grid-left-right h-full">
          <Header />
          <Nav />
        </div>
      </div>
      <div className="grid-left-right">
        <Sidebar />
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
