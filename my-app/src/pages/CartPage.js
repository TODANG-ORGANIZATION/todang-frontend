import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantMenuCard from "../components/CartMenuCard"; // 메뉴 카드 컴포넌트
import Button5 from "../components/Button5";

const CartPage = () => {
  const navigate = useNavigate();
  // 장바구니 상태
  const [cartItems, setCartItems] = useState([
    { id: 1, restaurant: "김밥천국", name: "참치김밥", price: 5000 },
    { id: 2, restaurant: "김밥천국", name: "라면", price: 4000 },
    { id: 3, restaurant: "한식당", name: "불고기 정식", price: 10000 },
  ]);

  // 장바구니가 비었을 경우
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[82vh]">
        <img 
          src="/images/empty.png" 
          alt="빈 장바구니" 
          className="w-32 h-32"
        />
        <p className="text-gray-500 text-lg mt-4">
          장바구니가 텅 비었어요
        </p>
        <button 
          onClick={() => window.location.href = '/'} 
          className="px-6 py-2 bg-[#F78A16] text-white rounded-full hover:bg-[#e07913] transition-colors mt-4"
        >
          + 더 담으러 가기
        </button>
      </div>
    );
  }

  // 장바구니에 있는 음식점 리스트 (중복 제거)
  const restaurantNames = [...new Set(cartItems.map((item) => item.restaurant))];

  // 총 주문 금액 계산
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="pt-14 p-4 pb-24 relative min-h-screen">
      {restaurantNames.map((restaurant) => (
        <div key={restaurant} className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{restaurant}</h2>
          <div className="flex flex-col gap-2 mt-2">
            {cartItems
              .filter((item) => item.restaurant === restaurant)
              .map((menu) => (
                <RestaurantMenuCard key={menu.id} menu={menu} />
              ))}
          </div>
        </div>
      ))}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button5 
          text={`${totalAmount.toLocaleString()}원 주문하기`}
          onClick={() => {
            navigate('/payment');
          }}
        />
      </div>
    </div>
  );
};

export default CartPage;
