import { Route, Routes } from "react-router-dom";
import Profile from "../view/profile/Profile";
import Home from "../view/home/Home";
import Settings from "../view/settings/Settings";
import Login from "../view/login/Login";
import Sidebar from "../components/sidebar/Sidebar";

const Router = () => {
  return (
    <>
      <div className="flex h-full">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>404 Error Page</h1>} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default Router;
