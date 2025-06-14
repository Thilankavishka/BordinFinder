import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SellerDashboard from "./pages/SellerDashboard";
import BoardingList from "./components/BoardingList";
import UserDashboard from "./pages/UsrDashboard";
import AddBoarding from "./pages/AddBoarding";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/sellerdashboard" element={<SellerDashboard/>}/>
        <Route path="/boardings" element={<BoardingList />} />
        <Route path="/userdashboard" element={<UserDashboard/>}/>
        <Route path="/addbordin" element={<AddBoarding/>}/>
      </Routes>
    </Router>
  );
}