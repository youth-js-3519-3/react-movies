import { Outlet } from "react-router";

import "./index.css";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <img src={"/images/logo-white.png"} alt="Logo YouthFlix" />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
