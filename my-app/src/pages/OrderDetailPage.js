import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button5 from '../components/Button5';

function OrderDetailPage() {
  const { id } = useParams();
  
  // 백엔드에서 받아올 주문 상세 데이터 (예시)
  const [orderDetail, setOrderDetail] = useState({
    id: 1,
    status: 'cooking', // 'cooking', 'ready', 'completed' 중 하나
    restaurantName: '김밥천국',
    orderDate: '2024-03-20T14:30:00',
    items: [
      {
        id: 1,
        menuName: '참치김밥',
        options: ['와사비 추가', '곱빼기'],
        price: 5000
      },
      {
        id: 2,
        menuName: '라면',
        options: ['매운맛', '계란 추가'],
        price: 4500
      }
    ],
    totalPrice: 9500
  });

  // 주문 상태 텍스트 변환 함수
  const getStatusText = (status) => {
    switch(status) {
      case 'cooking':
        return '요리 만드는 중...';
      case 'ready':
        return '조리가 완료되었어요';
      case 'completed':
        return '음식을 수령했어요';
      default:
        return '';
    }
  };

  // 날짜 포맷팅 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  return (
    <div className="pt-14 p-4 pb-24 relative min-h-screen">
      {/* 주문 상태 */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          {getStatusText(orderDetail.status)}
        </h2>
      </div>

      {/* 주문 정보 */}
      <div className="space-y-6">
        {/* 가게명 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">{orderDetail.restaurantName}</h3>
          <p className="text-gray-600">{formatDate(orderDetail.orderDate)}</p>
        </div>

        {/* 주문 메뉴 목록 */}
        <div>
          <h3 className="text-gray-500 mb-3">주문 메뉴</h3>
          <div className="space-y-4">
            {orderDetail.items.map((item) => (
              <div key={item.id} className="border-b pb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.menuName}</span>
                  <span>{item.price.toLocaleString()}원</span>
                </div>
                {item.options.length > 0 && (
                  <div className="text-sm text-gray-500">
                    {item.options.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 총 금액 */}
        <div className="pt-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">총 금액</span>
            <span className="text-xl font-bold">
              {orderDetail.totalPrice.toLocaleString()}원
            </span>
          </div>
        </div>
      </div>

      {/* 하단 고정 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button5 
          text="주문하기"
          onClick={() => {
            // 주문하기 로직
            console.log('같은 메뉴로 주문하기');
          }}
        />
      </div>
    </div>
  );
}

export default OrderDetailPage; 