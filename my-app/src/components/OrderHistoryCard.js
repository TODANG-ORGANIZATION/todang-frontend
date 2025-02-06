import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button5 from './Button5';

function OrderHistoryCard({ order }) {
  const navigate = useNavigate();

  // 날짜 포맷팅 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-2">
      {/* 주문 날짜 */}
      <div className="p-3 bg-gray-50 border-b">
        <p className="text-gray-600">{formatDate(order.orderDate)}</p>
      </div>

      {/* 가게 정보 */}
      <div className="p-4">
        <div className="flex gap-4 mb-4">
          <img 
            src={order.restaurantImage} 
            alt={order.restaurantName}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-semibold text-lg mb-1">{order.restaurantName}</h3>
            <p className="text-gray-600 mb-1">{order.menuName}</p>
            <p className="font-medium">{order.totalPrice.toLocaleString()}원</p>
          </div>
        </div>

        {/* 상세 버튼 */}
        <button 
          onClick={() => navigate(`/order/${order.id}`)}
          className="text-blue-600 underline mb-4"
        >
          상세 보기
        </button>

        {/* 주문 상태에 따른 버튼들 */}
        <div className="space-y-2">
          {!order.isCompleted ? (
            // 조리중인 주문
            <Button5 
              text="조리중"
              disabled={true}
              className="bg-yellow-500"
            />
          ) : (
            // 완료된 주문
            <>
              {!order.hasReview && (
                <Button5 
                  text="리뷰 쓰기"
                  onClick={() => navigate(`/review/write/${order.id}`)}
                />
              )}
              <Button5 
                text="같은 메뉴 담기"
                onClick={() => {
                  // 장바구니 담기 로직
                  console.log('같은 메뉴 담기:', order.id);
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryCard; 