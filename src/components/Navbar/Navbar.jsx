import "./Navbar.css";
import { assets } from "../../assets/assets";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img className="logo" src={assets.ordernow2} alt="" />
        <h1 className="admin">Admin Panel</h1>
      </div>
    </div>
  );
};
