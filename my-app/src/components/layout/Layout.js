import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();
  
  // 현재 경로에 따라 Header props 설정
  const getHeaderProps = () => {
    // review 페이지의 경우 orderId가 포함된 실제 경로와 매칭
    if (location.pathname.startsWith('/review/')) {
      return {
        title: "리뷰 쓰기",
        showBackButton: true,
        showCartButton: false
      };
    }

    switch(location.pathname) {
      case '/cart':
        return {
          title: "장바구니",
          showBackButton: true,
          showCartButton: false
        };
      case '/payment':
        return {
          title: "결제하기",
          showBackButton: true,
          showCartButton: false
        };
      case '/signup':
        return {
          title: "회원가입",
          showBackButton: true,
          showCartButton: false
        };
      case '/orders':
        return {
          title: "주문내역",
          showBackButton: false,
          showCartButton: true
        };
      case '/liked':
        return {
          title: "찜",
          showBackButton: false,
          showCartButton: true
        };
      default:
        return {
          title: "홈",
          showSearch: true,
          showBackButton: false,
          showCartButton: true
        };
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header {...getHeaderProps()} />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;