import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.add_icon} alt="Add Item Icon" />
          <p>Add Item</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={assets.order_icon} alt="List Items Icon" />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <img src={assets.order_icon} alt="Orders Icon" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};
