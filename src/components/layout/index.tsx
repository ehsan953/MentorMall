import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <div className="">
        <Header />
        <div className="min-h-[100vh]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
