import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-slate-900 text-white min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;