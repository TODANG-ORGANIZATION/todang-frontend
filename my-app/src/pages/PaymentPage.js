import React, { useState } from 'react';
import Button5 from '../components/Button5';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const navigate = useNavigate();
  // 백엔드에서 받아올 초기값들
  const initialPhoneNumber = "010-1234-5678";  // 예시 전화번호
  const restaurantAddress = "서울특별시 강남구 테헤란로 123";  // 예시 주소
  const totalAmount = 19000;  // 예시 금액

  const [request, setRequest] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);

  return (
    <div className="pt-14 p-4 pb-24 relative min-h-screen">
      {/* 배달 주소 */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="text-sm text-gray-500 mb-2">배달주소</h3>
        <p className="text-gray-800">{restaurantAddress}</p>
      </div>

      {/* 요청사항 입력 */}
      <div className="mb-6">
        <label className="block text-sm text-gray-500 mb-2">
          요청사항
        </label>
        <textarea
          className="w-full p-3 border rounded-lg resize-none"
          rows="3"
          placeholder="요청사항을 입력해주세요"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
        />
      </div>

      {/* 전화번호 입력 */}
      <div className="mb-6">
        <label className="block text-sm text-gray-500 mb-2">
          전화번호
        </label>
        <input
          type="tel"
          className="w-full p-3 border rounded-lg"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      {/* 결제 금액 */}
      <div className="mb-6">
        <h3 className="text-sm text-gray-500 mb-2">결제 금액</h3>
        <p className="text-xl font-bold">
          {totalAmount.toLocaleString()}원
        </p>
      </div>

      {/* 하단 고정 주문하기 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button5 
          text={`${totalAmount.toLocaleString()}원 결제하기`}
          onClick={() => {
            // 결제 처리 로직
            console.log('결제하기 클릭', {
              address: restaurantAddress,
              request,
              phoneNumber,
              amount: totalAmount
            });
          }}
        />
      </div>
    </div>
  );
}

export default PaymentPage; 