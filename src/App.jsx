import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Sidebar } from "./components/Sidebar/Sidebar.jsx";
import { Add } from "./pages/Add/Add.jsx";
import List from "./pages/list/List.jsx";
import Order from "./pages/Order/Order.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
