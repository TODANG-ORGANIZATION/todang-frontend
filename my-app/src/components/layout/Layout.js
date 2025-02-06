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
        showCartButton: false,
        showAlertButton: false
      };
    }

    switch(location.pathname) {
      case '/cart':
        return {
          title: "장바구니",
          showBackButton: true,
          showCartButton: false,
          showAlertButton: false
        };
      case '/payment':
        return {
          title: "결제하기",
          showBackButton: true,
          showCartButton: false,
          showAlertButton: false
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
          showCartButton: true,
          showAlertButton: false
        };
      case '/mypage':
        return {
          title: "MY 투당",
          showBackButton: false,
          showCartButton: false,
          showAlertButton: true
        };
      case '/mypage/edit':
        return {
          title: "정보 수정",
          showBackButton: false,
          showCartButton: false,
          showAlertButton: false
        };
      case '/reviews':
        return {
          title: "리뷰 관리",
          showBackButton: true,
          showCartButton: false,
          showAlertButton: false
        };
      case '/reviews/:reviewId':
        return {
          title: "리뷰 상세",
          showBackButton: true,
          showCartButton: false,
          showAlertButton: false
        };
      case '/alert':
        return {
          title: "알림 센터",
          showBackButton: true,
          showCartButton: false,
          showAlertButton: false
        };

      default:
        return {
          title: "홈",
          showBackButton: false,
          showCartButton: true,
          showAlertButton: false
        };
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header {...getHeaderProps()} />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;