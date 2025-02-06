import './index.css'
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import OrderHistoryPage from './pages/OrderHistoryPage';
import OrderDetailPage from './pages/OrderDetailPage';
import ReviewWritePage from './pages/ReviewWritePage';
import LikedPage from './pages/LikedPage';
import LoginSelectPage from './pages/LoginSelectPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MyPage from './pages/MyPage';
import MyPageEdit from './pages/MyPageEdit';
import ReviewList from './pages/ReviewList'
import AlertPage from './pages/AlertPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login-select" element={<LoginSelectPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="orders" element={<OrderHistoryPage />} />
            <Route path="order/:id" element={<OrderDetailPage />} />
            <Route path="review/write/:orderId" element={<ReviewWritePage />} />
            <Route path="liked" element={<LikedPage />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="mypage/edit" element={<MyPageEdit />} />
            <Route path="reviews" element={<ReviewList />} />
            <Route path="alert" element={<AlertPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
