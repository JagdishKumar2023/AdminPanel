import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Sidebar } from "./components/Sidebar/Sidebar.jsx";
import { Add } from "./pages/Add/Add.jsx";
import Order from "./pages/Order/Order.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import List from "./pages/List/List.jsx";

const App = () => {
  const url = "http://localhost:4000";

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Order url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
