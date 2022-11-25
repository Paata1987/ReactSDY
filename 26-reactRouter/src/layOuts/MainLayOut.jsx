import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

const MainLayOut = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default MainLayOut;
