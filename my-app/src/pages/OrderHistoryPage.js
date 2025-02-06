import React, { useState } from 'react';
import OrderHistoryCard from '../components/OrderHistoryCard';
import Footer from '../components/layout/Footer';

function OrderHistoryPage() {
  // 백엔드에서 받아올 주문 내역 데이터 (예시)
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderDate: '2024-03-20',
      restaurantName: '김밥천국',
      restaurantImage: '/images/restaurant1.jpg',
      menuName: '참치김밥 외 2개',
      totalPrice: 15000,
      isCompleted: false, // 조리중
    },
    {
      id: 2,
      orderDate: '2024-03-19',
      restaurantName: '맛있는 치킨',
      restaurantImage: '/images/restaurant2.jpg',
      menuName: '후라이드 치킨 1마리',
      totalPrice: 18000,
      isCompleted: true, // 완료됨
      hasReview: false, // 리뷰 아직 안씀
    },
    {
      id: 3,
      orderDate: '2024-03-18',
      restaurantName: '동네 피자',
      restaurantImage: '/images/restaurant3.jpg',
      menuName: '페퍼로니 피자 외 1개',
      totalPrice: 25000,
      isCompleted: true, // 완료됨
      hasReview: true, // 리뷰 이미 씀
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="flex-1 pb-[10vh]">
        {orders.map((order) => (
          <OrderHistoryCard key={order.id} order={order} />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white">
        <Footer />
      </div>
    </div>
  );
}

export default OrderHistoryPage; 