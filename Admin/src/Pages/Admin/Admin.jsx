// import React from 'react'
import Sidebar from "../../components/SideBar/Sidebar";
import { Routes, Route } from "react-router-dom";
import "./Admin.css";
import AddProduct from "../../components/AddProduct/AddProduct";
import ListProduct from "../../components/ListProduct/ListProduct";

const Admin = () => {
  return (
    <>
      <div className="admin">
        <Sidebar />
        <Routes>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} />
        </Routes>
      </div>
    </>
  );
};

export default Admin;
